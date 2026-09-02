// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Typed accessor for known user_metadata keys from Supabase auth
 *
 * @openapiSchema AuthUserMetadata
 * @endpoint POST /v1/auth/api/login
 * @endpoint POST /v1/auth/api/register
 * @endpoint POST /v1/user/create
 * @usedBySchema AuthAdminUserMutationSchema
 * @usedBySchema AuthUserMutationSchema
 * @usedBySchema AuthUserSchema
 * @contractShape auth.user-metadata
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthUserMetadata.kt
 */
export const AuthUserMetadataSchema = z.object({
    /** Given name from Supabase user_metadata */
    firstName: z.string().nullish(),
    /** Full display name from Supabase user_metadata */
    fullName: z.string().nullish(),
    /** Family name from Supabase user_metadata */
    lastName: z.string().nullish(),
    /** LinkedIn profile URL from Supabase user_metadata */
    linkedinUrl: z.string().nullish(),
    /** Nickname from Supabase user_metadata */
    nickname: z.string().nullish(),
    /** Application role label from Supabase user_metadata */
    role: z.string().nullish(),
    /** Contact workflow/status label mirrored from Supabase user_metadata; not the Supabase auth account enabled/disabled state. */
    status: z.string().nullish(),
    /** X/Twitter username from Supabase user_metadata */
    twitterUsername: z.string().nullish(),
    /** Managed user photo upload path from Supabase user_metadata */
    userPhotoUploadPath: z.string().nullish(),
    /** IANA timezone from Supabase user_metadata */
    userTimezone: z.string().nullish(),
    /** User type labels from Supabase auth metadata */
    userType: z.array(z.string()),
});
//# sourceMappingURL=user-metadata.js.map