import { z } from "zod/v4";
declare const AuthUserMutationSchemaDefinition: z.ZodObject<{
    email: z.ZodEmail;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    password: z.ZodString;
    redirectTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type AuthUserMutationDefinition = z.infer<typeof AuthUserMutationSchemaDefinition>;
/**
 * Self-service auth registration request. Sends the user through the verification email flow; redirectTo selects the post-verification destination when supplied.
 *
 * @openapiSchema AuthUserMutation
 * @endpoint POST /v1/auth/api/register
 * @contractShape auth.user-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthUserMutation.kt
 */
export declare const AuthUserMutationSchema: z.ZodType<AuthUserMutationDefinition>;
export type AuthUserMutation = z.infer<typeof AuthUserMutationSchema>;
export {};
//# sourceMappingURL=user-mutation.d.ts.map