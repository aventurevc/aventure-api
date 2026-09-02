// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AppJobMutationSchemaDefinition = z.object({
    /** Whether DB effective config enables this job */
    enabled: z.boolean().nullish(),
    /** Whether this job can be invoked by API or recurring triggers */
    invocationEnabled: z.boolean().nullish(),
});
/**
 * Runtime config mutation for an app job
 *
 * @openapiSchema AppJobMutation
 * @endpoint PATCH /v1/jobs/{jobKey}
 * @contractShape app.job-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJobMutation.kt
 */
export const AppJobMutationSchema = AppJobMutationSchemaDefinition;
//# sourceMappingURL=job-mutation.js.map