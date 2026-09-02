// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployPairMemberSchema } from "./pair-member.js";
import { DeployPairSourceTypeSchema } from "./pair-source-type.js";
const DeployPairSchemaDefinition = z.object({
    /** Reason promotion is unavailable when promotable is false */
    disabledReason: z.string().nullish(),
    /** Human-readable pair name */
    displayName: z.string(),
    /** Pair members in deploy order */
    member: z.array(DeployPairMemberSchema),
    /** Stable pair key */
    name: z.string(),
    /** Whether the pair can be promoted right now */
    promotable: z.boolean(),
    /** Safe initial source for this pair; absent when operator review is required */
    recommendedSource: DeployPairSourceTypeSchema.nullish(),
});
/**
 * Configured deploy pair with resolved live state for promotion preview
 *
 * @openapiSchema DeployPair
 * @endpoint GET /v1/deploy/pairs
 * @contractShape deploy.pair
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPairSchema = DeployPairSchemaDefinition;
//# sourceMappingURL=pair.js.map