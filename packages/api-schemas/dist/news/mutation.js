// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsMutationSchemaDefinition = z.object({
    /** Override suspected shell-strip rejection for intentional prose; prefer --from-file. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Author name */
    author: z.string().nullish(),
    /** Comma-separated category tags (e.g. "Fintech,Startups"); array syntax is rejected. */
    category: z.string().nullish(),
    /** Article content body. Required on CREATE for internal articles (externalNewsArticle=false); external articles (the default) omit it and render via redirect to newsUrlOriginal. */
    content: z.string().max(100000).nullish(),
    /** When true, removes every entity join on /v1/news/detail and on person-scoped routes; an entity-scoped update removes only the route entity's join */
    detachEntity: z.boolean().nullish(),
    /** When true, removes every person join on /v1/news/detail and on entity-scoped routes; a person-scoped update removes only the route person's join */
    detachPerson: z.boolean().nullish(),
    /** Entity ids for the entity join set. They replace the article's whole entity join set on /v1/news/detail and on person-scoped routes; an entity-scoped create adds the route entity to them; an entity-scoped update of an existing article ignores them and acts on the route entity alone */
    entityJoinId: z.array(z.uuid()).nullish(),
    /** Supporting quote or evidence for entity match */
    entityMatchEvidence: z.string().max(2000).nullish(),
    /** Score for the entity joins this request writes: the entityJoinId set wherever that field applies, the route entity on an entity-scoped update */
    entityMatchScore: z.number().min(0).max(100).nullish(),
    /** Match status for the entity joins this request writes: the entityJoinId set wherever that field applies, the route entity on an entity-scoped update. Omit it on an entity-scoped update to keep the decision already recorded. matchStatus must be auto-match|needs-review|approved|rejected with optional audit metadata */
    entityMatchStatus: z
        .string()
        .regex(/^(auto-match|needs-review|approved|rejected)(\|user=[^|]+\|at=[^|]+)?$/)
        .nullish(),
    /** Article excerpt/summary. Required on CREATE for external articles (the default). */
    excerpt: z.string().nullish(),
    /** External source identifier */
    externalId: z.string().nullish(),
    /** External article flag. Defaults to true (external/third-party article) when omitted; set false only for an internal aVenture-hosted article, which requires content. */
    externalNewsArticle: z.boolean().nullish(),
    /** Managed news thumbnail path returned by media upload/import; sourceDetail must match stored media provenance. */
    newsImageThumbnail: z.string().nullish(),
    /** Original live news article URL. Required on CREATE for external articles. Rejected (422): ycombinator.com/companies/{company-slug}, pitchbook.com/profiles/**, linkedin.com/company/**, producthunt.com/products/**, and other entity/profile URLs; use the ProblemDetail surface, usually EntityUrl.urlType=* via entities urls create. */
    newsUrlOriginal: z.string().nullish(),
    /** Single person id attached to the article; other person joins are preserved, and omitting personMatchStatus keeps the decision already recorded for this person */
    personId: z.uuid().nullish(),
    /** Supporting quote or evidence for person match */
    personMatchEvidence: z.string().max(2000).nullish(),
    /** Score for the person match (0-100) */
    personMatchScore: z.number().min(0).max(100).nullish(),
    /** Match status for the attached person join; matchStatus must be auto-match|needs-review|approved|rejected with optional audit metadata */
    personMatchStatus: z
        .string()
        .regex(/^(auto-match|needs-review|approved|rejected)(\|user=[^|]+\|at=[^|]+)?$/)
        .nullish(),
    /** Single person slug attached to the article; existing person joins are preserved */
    personSlug: z.string().nullish(),
    /** Publication/source name. Required on CREATE for external articles (the default). */
    publication: z.string().nullish(),
    /** Publication timestamp */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Deprecated: caller-supplied article embeddings are rejected. Canonical section-fusion embeddings refresh from saved article content. Embedding vector pinned to qwen-4b-fp16 (Qwen3-Embedding-4B-f16.gguf) from https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf; only this fp16 model is accepted and exactly 2560 floats are required */
    qwen4bFp16Embedding: z.array(z.number()).min(2560).max(2560).nullish(),
    /** Initial article slug at create time. Omit for the dated slug generated from publishedAt and title. An update accepts only the article's current slug (a full-body resend); rename through PATCH /v1/news/{newsId}/slug. */
    slug: z.string().nullish(),
    /** Article title */
    title: z.string().max(500).nullish(),
});
/**
 * Create/update payload for news article fields and joins.
 *
 * @openapiSchema NewsMutation
 * @endpoint POST /v1/entities/detail/news
 * @endpoint POST /v1/news/detail
 * @endpoint POST /v1/people/detail/news
 * @endpoint PATCH /v1/entities/detail/news/{newsId}
 * @endpoint PATCH /v1/news/detail
 * @endpoint PATCH /v1/people/detail/news/{newsId}
 * @endpoint PUT /v1/entities/detail/news/{newsId}
 * @endpoint PUT /v1/news/detail
 * @endpoint PUT /v1/people/detail/news/{newsId}
 * @contractShape news.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsMutation.kt
 */
export const NewsMutationSchema = NewsMutationSchemaDefinition;
//# sourceMappingURL=mutation.js.map