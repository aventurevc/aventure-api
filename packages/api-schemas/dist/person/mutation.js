// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonImageMutationSchema } from "./image-mutation.js";
import { PersonSourceMutationSchema } from "./source-mutation.js";
import { PersonVisibilityStatusMutationSchema } from "./visibility-status-mutation.js";
/**
 * Canonical person mutation body for create, update, and RFC 7396 merge-patch operations. Omitted nullable fields leave existing values unchanged on writes.
 *
 * @openapiSchema PersonMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonCreateSchema
 * @usedBySchema PersonMergeSchema
 * @contractShape person.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export const PersonMutationSchema = z.object({
    /** Gender */
    gender: z.string().nullish(),
    /** Profile image object */
    image: PersonImageMutationSchema.nullish(),
    /** First name */
    nameFirst: z.string().nullish(),
    /** Last name */
    nameLast: z.string().nullish(),
    /** Middle name */
    nameMiddle: z.string().nullish(),
    /** Preferred detail-update slug rename field. Omit on create; when slug is also sent both fields must normalize to the same value. */
    newSlug: z.string().nullish(),
    /** Nickname */
    nickname: z.string().nullish(),
    /** Person URL slug. Required on create; detail updates may rename through this field or newSlug. */
    slug: z.string().nullish(),
    /** Source workflow metadata */
    source: PersonSourceMutationSchema.nullish(),
    /** Visibility status object */
    status: PersonVisibilityStatusMutationSchema.nullish(),
    /** Name suffix */
    suffix: z.string().nullish(),
});
//# sourceMappingURL=mutation.js.map