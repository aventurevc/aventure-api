import { z } from "zod/v4";
declare const DeployPairMemberSchemaDefinition: z.ZodObject<{
    destinationTargetName: z.ZodString;
    newestPromotedTag: z.ZodArray<z.ZodString>;
    newestStagingTag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promotedTag: z.ZodArray<z.ZodString>;
    promotionHold: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    revertImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runningStagingTag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceTargetName: z.ZodString;
    unresolvedReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type DeployPairMemberDefinition = z.infer<typeof DeployPairMemberSchemaDefinition>;
/**
 * One member of a configured deploy pair with its resolved staging state
 *
 * @openapiSchema DeployPairMember
 * @endpoint GET /v1/deploy/pairs
 * @usedBySchema DeployPairSchema
 * @contractShape deploy.pair-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairMemberSchema: z.ZodType<DeployPairMemberDefinition>;
export type DeployPairMember = z.infer<typeof DeployPairMemberSchema>;
export {};
//# sourceMappingURL=pair-member.d.ts.map