/**
 * Entity relationship type — auto-generated from application-domain.yml.
 *
 * LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
 * DO NOT EDIT. This file is replaced on every build by scripts/build-filter-catalog.mjs.
 */
import { z } from "zod/v4";
/**
 * @shared primitive:single reusable domain entity.relationship-type; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema none:external-root
 * @usedByEndpoint none:external-root
 * @contractShape entity.relationship-type
 * @contractRole canonical
 * @ownerModule entity/relationship-type.ts
 */
export const EntityRelationshipTypeSchema = z.enum([
    "similarCompany",
    "competitor",
    "affinity",
    "fundManagerFirm",
    "spinOffFrom",
    "productService",
    "competingProductService",
    "acquirer",
    "customer",
    "parent",
    "serviceProvider",
    "successor",
    "acceleratorParticipant",
    "calculated",
]);
//# sourceMappingURL=relationship-type.js.map