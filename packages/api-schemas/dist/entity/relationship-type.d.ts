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
export declare const EntityRelationshipTypeSchema: z.ZodEnum<{
    acceleratorParticipant: "acceleratorParticipant";
    acquirer: "acquirer";
    affinity: "affinity";
    calculated: "calculated";
    competingProductService: "competingProductService";
    competitor: "competitor";
    customer: "customer";
    fundManagerFirm: "fundManagerFirm";
    parent: "parent";
    productService: "productService";
    serviceProvider: "serviceProvider";
    similarCompany: "similarCompany";
    spinOffFrom: "spinOffFrom";
    successor: "successor";
}>;
export type EntityRelationshipType = z.infer<typeof EntityRelationshipTypeSchema>;
//# sourceMappingURL=relationship-type.d.ts.map