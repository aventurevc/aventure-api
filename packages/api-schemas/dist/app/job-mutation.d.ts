import { z } from "zod/v4";
declare const AppJobMutationSchemaDefinition: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    invocationEnabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type AppJobMutationDefinition = z.infer<typeof AppJobMutationSchemaDefinition>;
/**
 * Runtime config mutation for an app job
 *
 * @openapiSchema AppJobMutation
 * @endpoint PATCH /v1/jobs/{jobKey}
 * @contractShape app.job-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJobMutation.kt
 */
export declare const AppJobMutationSchema: z.ZodType<AppJobMutationDefinition>;
export type AppJobMutation = z.infer<typeof AppJobMutationSchema>;
export {};
//# sourceMappingURL=job-mutation.d.ts.map