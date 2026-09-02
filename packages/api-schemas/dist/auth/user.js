// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthUserMetadataSchema } from "./user-metadata.js";
const AuthUserSchemaDefinition = z.object({
    /** Supabase auth-user creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Auth email address when Supabase returns one */
    email: z.string().nullish(),
    /** Supabase email confirmation timestamp when confirmed */
    emailConfirmedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Supabase auth user id */
    id: z.string(),
    /** Most recent Supabase sign-in timestamp when present */
    lastSignInAt: z.iso.datetime({ offset: true }).nullish(),
    /** Auth phone number when Supabase returns one */
    phone: z.string().nullish(),
    /** Supabase auth-user update timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Known Supabase user_metadata fields returned for this user */
    userMetadata: AuthUserMetadataSchema,
});
/**
 * Domain record for an authenticated user mapped from SDK UserInfo
 *
 * @openapiSchema AuthUser
 * @endpoint POST /v1/auth/api/login
 * @endpoint POST /v1/user/create
 * @contractShape auth.user
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthUser.kt
 */
export const AuthUserSchema = AuthUserSchemaDefinition;
//# sourceMappingURL=user.js.map