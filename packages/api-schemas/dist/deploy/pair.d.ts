import { z } from "zod/v4";
declare const DeployPairSchemaDefinition: z.ZodObject<{
    disabledReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayName: z.ZodString;
    member: z.ZodArray<z.ZodType<{
        destinationTargetName: string;
        newestPromotedTag: string[];
        newestStagingTag?: string | null | undefined;
        promotedTag: string[];
        promotionHold?: string | null | undefined;
        revertImage?: string | null | undefined;
        runningStagingTag?: string | null | undefined;
        sourceTargetName: string;
        unresolvedReason?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        destinationTargetName: string;
        newestPromotedTag: string[];
        newestStagingTag?: string | null | undefined;
        promotedTag: string[];
        promotionHold?: string | null | undefined;
        revertImage?: string | null | undefined;
        runningStagingTag?: string | null | undefined;
        sourceTargetName: string;
        unresolvedReason?: string | null | undefined;
    }, unknown>>>;
    name: z.ZodString;
    promotable: z.ZodBoolean;
    recommendedSource: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        NewestStagingBuild: "NewestStagingBuild";
        RunningOnStaging: "RunningOnStaging";
    }>>>;
}, z.core.$strip>;
type DeployPairDefinition = z.infer<typeof DeployPairSchemaDefinition>;
/**
 * Configured deploy pair with resolved live state for promotion preview
 *
 * @openapiSchema DeployPair
 * @endpoint GET /v1/deploy/pairs
 * @contractShape deploy.pair
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairSchema: z.ZodType<DeployPairDefinition>;
export type DeployPair = z.infer<typeof DeployPairSchema>;
export {};
//# sourceMappingURL=pair.d.ts.map