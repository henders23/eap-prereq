#!/usr/bin/env node
/**
 * migrate-stage-roles.mjs — one-off migration from `stages` to the revised
 * topic schema (stageRoles, coreBand, audience, disciplines) with provisional
 * values, so builds stay valid while strand authors assign real roles.
 * Every stage becomes 'develop'; 'pre-sessional' becomes both pre-sessional
 * stages; coreBand starts at cefrStart; disciplines come from the
 * disciplinary domain where there is one.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SRC, loadStrandFiles } from '../../scripts/lib.mjs';

const DOMAIN_DISCIPLINES = {
  DSE: ['sciences', 'engineering', 'computing', 'mathematics-statistics'],
  DHL: ['health-medicine'],
  DBE: ['business-management', 'economics'],
  DLW: ['law'],
  DSS: ['social-sciences', 'education'],
  DHU: ['humanities'],
  DAD: ['arts-design'],
};
for (const { file, data } of loadStrandFiles()) {
  for (const t of data.topics) {
    if (!t.stageRoles) {
      const roles = {};
      for (const s of t.stages ?? []) {
        if (s === 'pre-sessional') { roles['pre-sessional-ug'] = 'develop'; roles['pre-sessional-pg'] = 'develop'; }
        else roles[s] = 'develop';
      }
      t.stageRoles = roles;
    }
    delete t.stages;
    t.coreBand ??= t.cefrStart;
    t.audience ??= 'learner';
    t.disciplines ??= t.specificity === 'ESAP' ? DOMAIN_DISCIPLINES[t.id.slice(0, 3).toUpperCase()] ?? ['sciences'] : [];
  }
  for (const d of data.domains) {
    const se = d.stageEmphasis ?? {};
    if ('pre-sessional' in se) {
      se['pre-sessional-ug'] = se['pre-sessional'];
      se['pre-sessional-pg'] = se['pre-sessional'];
      delete se['pre-sessional'];
    }
    d.stageEmphasis = se;
  }
  writeFileSync(resolve(SRC, 'strands', file), JSON.stringify(data, null, 2) + '\n');
}
console.log('migrated');
