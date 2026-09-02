// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthUserMetadataSchema } from "./user-metadata.js";
const AuthUserMutationSchemaDefinition = z.object({
    /** Email address for the self-service registration */
    email: z.email(),
    /** Optional Supabase user_metadata values to store on signup */
    metadata: AuthUserMetadataSchema.nullish(),
    /** Password for the new auth account */
    password: z.string().min(1),
    /** Optional trusted destination after email verification */
    redirectTo: z.string().nullish(),
});
/**
 * Self-service auth registration request. Sends the user through the verification email flow; redirectTo selects the post-verification destination when supplied.
 *
 * @openapiSchema AuthUserMutation
 * @endpoint POST /v1/auth/api/register
 * @contractShape auth.user-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthUserMutation.kt
 */
export const AuthUserMutationSchema = AuthUserMutationSchemaDefinition;
//# sourceMappingURL=user-mutation.js.map