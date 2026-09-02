// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthUserMetadataSchema } from "./user-metadata.js";
const AuthAdminUserMutationSchemaDefinition = z.object({
    /** Email address for the new Supabase auth user */
    email: z.email(),
    /** Optional Supabase user_metadata values to store and sync */
    metadata: AuthUserMetadataSchema,
    /** Initial password sent to Supabase Auth; never returned */
    password: z.string().min(1),
});
/**
 * Admin auth-user create request. Creates a Supabase auth user, auto-confirms the email immediately, stores supplied metadata as Supabase user_metadata, syncs the matching contact row, and returns the created AuthUser. This path does not send an invite or verification email.
 *
 * @openapiSchema AuthAdminUserMutation
 * @endpoint POST /v1/user/create
 * @contractShape auth.admin-user-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthAdminUserMutation.kt
 */
export const AuthAdminUserMutationSchema = AuthAdminUserMutationSchemaDefinition;
//# sourceMappingURL=admin-user-mutation.js.map