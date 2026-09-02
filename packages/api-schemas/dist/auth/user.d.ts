import { z } from "zod/v4";
declare const AuthUserSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    emailConfirmedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodString;
    lastSignInAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    userMetadata: z.ZodObject<{
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
}, z.core.$strip>;
type AuthUserDefinition = z.infer<typeof AuthUserSchemaDefinition>;
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
export declare const AuthUserSchema: z.ZodType<AuthUserDefinition>;
export type AuthUser = z.infer<typeof AuthUserSchema>;
export {};
//# sourceMappingURL=user.d.ts.map