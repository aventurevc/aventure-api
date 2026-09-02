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
export declare const AuthUserMetadataSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    twitterUsername: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userPhotoUploadPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userTimezone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userType: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AuthUserMetadata = z.infer<typeof AuthUserMetadataSchema>;
//# sourceMappingURL=user-metadata.d.ts.map