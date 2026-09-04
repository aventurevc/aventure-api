// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AventureBlogArticleListSchema } from "../aventure/blog-article-list.js";
import { BlogPostSchema } from "../blog/post.js";
import { CliAuthorizationSchema } from "../cli/authorization.js";
import { ContentSchema } from "../content/content.js";
import { ContentPageListSchema } from "../content/page-list.js";
import { ContentTaxonomyCountSchema } from "../content/taxonomy-count.js";
import { DatasourceFieldProvenanceSchema } from "../datasource/field-provenance.js";
import { DeployEventSchema } from "../deploy/event.js";
import { EmployeeCountSchema } from "../employee/count.js";
import { EntityAcquisitionSchema } from "../entity/acquisition.js";
import { EntityDetailSchema } from "../entity/detail.js";
import { EntitySchema } from "../entity/entity.js";
import { EntityFundraiseInvestorJoinSchema } from "../entity/fundraise-investor-join.js";
import { EntityFundraiseTransactionSchema } from "../entity/fundraise-transaction.js";
import { EntityInvestorParticipationSchema } from "../entity/investor-participation.js";
import { EntityListSummarySchema } from "../entity/list-summary.js";
import { EntityListSchema } from "../entity/list.js";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { EntityRelationshipSchema } from "../entity/relationship.js";
import { EntityResearchDetailSchema } from "../entity/research-detail.js";
import { EntityResearchSnippetSchema } from "../entity/research-snippet.js";
import { EntitySimilarityResultSchema } from "../entity/similarity-result.js";
import { EntitySitemapUrlSchema } from "../entity/sitemap-url.js";
import { EntityTagSchema } from "../entity/tag.js";
import { EntityTextSchema } from "../entity/text.js";
import { EntityUrlLinkSchema } from "../entity/url-link.js";
import { EntityValuationTimeSeriesPointSchema } from "../entity/valuation-time-series-point.js";
import { ExternalSocialPostSchema } from "../external/social-post.js";
import { GithubRepoSchema } from "../github/repo.js";
import { HarnessRunSchema } from "../harness/run.js";
import { JobSchema } from "../job/job.js";
import { LocationDirectoryEntrySchema } from "../location/directory-entry.js";
import { MediaCrawlScreenshotSchema } from "../media/crawl-screenshot.js";
import { MediaLogoAuditJobSchema } from "../media/logo-audit-job.js";
import { NewsCandidateScoreSchema } from "../news/candidate-score.js";
import { NewsDetailSchema } from "../news/detail.js";
import { NewsLinkerCandidateSchema } from "../news/linker-candidate.js";
import { NewsSchema } from "../news/news.js";
import { PageableObjectSchema } from "../pageable/object.js";
import { PersonDetailSchema } from "../person/detail.js";
import { PersonInvestorParticipationSchema } from "../person/investor-participation.js";
import { PersonSchema } from "../person/person.js";
import { PersonSimilarityResultSchema } from "../person/similarity-result.js";
import { SavedViewSchema } from "../saved/view.js";
import { SearchDuplicateCandidateScoreSchema } from "../search/duplicate-candidate-score.js";
import { SitemapUrlSlotSchema } from "../sitemap/url-slot.js";
import { SocialMediaPostSchema } from "../social/media-post.js";
import { SortObjectSchema } from "../sort/object.js";
import { SourceDocumentListSchema } from "../source/document-list.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
import { UniqueIdSchema } from "../unique/id.js";
import { UrlSlugRedirectSchema } from "../url/slug-redirect.js";
import { WebSiteSchema } from "../web/site.js";
const PageAventureBlogArticleListSchemaDefinition = z.object({
    content: z.array(AventureBlogArticleListSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageAventureBlogArticleList
 * @endpoint GET /v1/app/blog/articles
 * @endpoint GET /v1/app/blog/articles/featured
 * @contractShape pagination.page-aventure-blog-article-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageAventureBlogArticleListSchema = PageAventureBlogArticleListSchemaDefinition;
const PageBlogPostSchemaDefinition = z.object({
    content: z.array(BlogPostSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageBlogPost
 * @endpoint GET /v1/research/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{slug}/blog-posts
 * @contractShape pagination.page-blog-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageBlogPostSchema = PageBlogPostSchemaDefinition;
const PageClassificationSchemaDefinition = z.object({
    content: z.array(z.union([EntityTagSchema, StandardizedClassificationSchema])).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageClassification
 * @endpoint GET /v1/classifications/search
 * @contractShape pagination.page-classification
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageClassificationSchema = PageClassificationSchemaDefinition;
const PageCliAuthorizationSchemaDefinition = z.object({
    content: z.array(CliAuthorizationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageCliAuthorization
 * @endpoint GET /v1/app/cli-authorizations
 * @contractShape pagination.page-cli-authorization
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageCliAuthorizationSchema = PageCliAuthorizationSchemaDefinition;
const PageContentSchemaDefinition = z.object({
    content: z.array(ContentSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageContent
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @contractShape pagination.page-content
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageContentSchema = PageContentSchemaDefinition;
const PageContentPageListSchemaDefinition = z.object({
    content: z.array(ContentPageListSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageContentPageList
 * @endpoint GET /v1/app/pages
 * @endpoint GET /v1/app/pages/featured
 * @contractShape pagination.page-content-page-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageContentPageListSchema = PageContentPageListSchemaDefinition;
const PageContentTaxonomyCountSchemaDefinition = z.object({
    content: z.array(ContentTaxonomyCountSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageContentTaxonomyCount
 * @endpoint GET /v1/app/blog/categories
 * @endpoint GET /v1/app/blog/tags
 * @endpoint GET /v1/app/pages/categories
 * @endpoint GET /v1/app/pages/tags
 * @contractShape pagination.page-content-taxonomy-count
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageContentTaxonomyCountSchema = PageContentTaxonomyCountSchemaDefinition;
const PageDatasourceFieldProvenanceSchemaDefinition = z.object({
    content: z.array(DatasourceFieldProvenanceSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageDatasourceFieldProvenance
 * @endpoint GET /v1/provenance/history
 * @contractShape pagination.page-datasource-field-provenance
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageDatasourceFieldProvenanceSchema = PageDatasourceFieldProvenanceSchemaDefinition;
const PageDeployEventSchemaDefinition = z.object({
    content: z.array(DeployEventSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageDeployEvent
 * @endpoint GET /v1/deploy/events
 * @contractShape pagination.page-deploy-event
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageDeployEventSchema = PageDeployEventSchemaDefinition;
const PageEmployeeCountSchemaDefinition = z.object({
    content: z.array(EmployeeCountSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEmployeeCount
 * @endpoint GET /v1/entities/detail/people/time-series
 * @contractShape pagination.page-employee-count
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEmployeeCountSchema = PageEmployeeCountSchemaDefinition;
const PageEntitySchemaDefinition = z.object({
    content: z.array(EntitySchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntity
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/sitemap-routes
 * @endpoint GET /v1/addresses/locations/{scope}/{slug}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint POST /v1/entities/duplicate-check
 * @contractShape pagination.page-entity
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySchema = PageEntitySchemaDefinition;
const PageEntityAcquisitionSchemaDefinition = z.object({
    content: z.array(EntityAcquisitionSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityAcquisition
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @contractShape pagination.page-entity-acquisition
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityAcquisitionSchema = PageEntityAcquisitionSchemaDefinition;
const PageEntityDetailSchemaDefinition = z.object({
    content: z.array(EntityDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityDetail
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @contractShape pagination.page-entity-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityDetailSchema = PageEntityDetailSchemaDefinition;
const PageEntityFundraiseInvestorJoinSchemaDefinition = z.object({
    content: z.array(EntityFundraiseInvestorJoinSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @contractShape pagination.page-entity-fundraise-investor-join
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityFundraiseInvestorJoinSchema = PageEntityFundraiseInvestorJoinSchemaDefinition;
const PageEntityFundraiseTransactionSchemaDefinition = z.object({
    content: z.array(EntityFundraiseTransactionSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityFundraiseTransaction
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @contractShape pagination.page-entity-fundraise-transaction
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityFundraiseTransactionSchema = PageEntityFundraiseTransactionSchemaDefinition;
const PageEntityInvestorParticipationSchemaDefinition = z.object({
    content: z.array(EntityInvestorParticipationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityInvestorParticipation
 * @endpoint GET /v1/entities/detail/investors
 * @contractShape pagination.page-entity-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityInvestorParticipationSchema = PageEntityInvestorParticipationSchemaDefinition;
const PageEntityListSchemaDefinition = z.object({
    content: z.array(EntityListSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityList
 * @endpoint GET /v1/entities
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @contractShape pagination.page-entity-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityListSchema = PageEntityListSchemaDefinition;
const PageEntityListSummarySchemaDefinition = z.object({
    content: z.array(EntityListSummarySchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityListSummary
 * @endpoint GET /v1/entities/summary
 * @contractShape pagination.page-entity-list-summary
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityListSummarySchema = PageEntityListSummarySchemaDefinition;
const PageEntityPersonSchemaDefinition = z.object({
    content: z.array(z.union([PersonSchema, PersonDetailSchema])).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityPerson
 * @endpoint GET /v1/entities/{entityId}/people
 * @contractShape pagination.page-entity-person
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityPersonSchema = PageEntityPersonSchemaDefinition;
const PageEntityPersonAssociationSchemaDefinition = z.object({
    content: z.array(EntityPersonAssociationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityPersonAssociation
 * @endpoint GET /v1/people/{personId}/entities
 * @contractShape pagination.page-entity-person-association
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityPersonAssociationSchema = PageEntityPersonAssociationSchemaDefinition;
const PageEntityRelationshipSchemaDefinition = z.object({
    content: z.array(EntityRelationshipSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityRelationship
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @contractShape pagination.page-entity-relationship
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityRelationshipSchema = PageEntityRelationshipSchemaDefinition;
const PageEntityResearchDetailSchemaDefinition = z.object({
    content: z.array(EntityResearchDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityResearchDetail
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @contractShape pagination.page-entity-research-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityResearchDetailSchema = PageEntityResearchDetailSchemaDefinition;
const PageEntityResearchSnippetSchemaDefinition = z.object({
    content: z.array(EntityResearchSnippetSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityResearchSnippet
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @contractShape pagination.page-entity-research-snippet
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityResearchSnippetSchema = PageEntityResearchSnippetSchemaDefinition;
const PageEntitySimilarityResultSchemaDefinition = z.object({
    content: z.array(EntitySimilarityResultSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntitySimilarityResult
 * @endpoint GET /v1/entities/detail/similar
 * @contractShape pagination.page-entity-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySimilarityResultSchema = PageEntitySimilarityResultSchemaDefinition;
const PageEntitySitemapUrlSchemaDefinition = z.object({
    content: z.array(EntitySitemapUrlSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntitySitemapUrl
 * @endpoint GET /v1/entities/sitemap-urls
 * @contractShape pagination.page-entity-sitemap-url
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntitySitemapUrlSchema = PageEntitySitemapUrlSchemaDefinition;
const PageEntityTagSchemaDefinition = z.object({
    content: z.array(EntityTagSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityTag
 * @endpoint GET /v1/classifications/tags
 * @contractShape pagination.page-entity-tag
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityTagSchema = PageEntityTagSchemaDefinition;
const PageEntityTextSchemaDefinition = z.object({
    content: z.array(EntityTextSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityText
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/people/{personId}/texts
 * @contractShape pagination.page-entity-text
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityTextSchema = PageEntityTextSchemaDefinition;
const PageEntityUrlLinkSchemaDefinition = z.object({
    content: z.array(EntityUrlLinkSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityUrlLink
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/all
 * @contractShape pagination.page-entity-url-link
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityUrlLinkSchema = PageEntityUrlLinkSchemaDefinition;
const PageEntityValuationTimeSeriesPointSchemaDefinition = z.object({
    content: z.array(EntityValuationTimeSeriesPointSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageEntityValuationTimeSeriesPoint
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @contractShape pagination.page-entity-valuation-time-series-point
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageEntityValuationTimeSeriesPointSchema = PageEntityValuationTimeSeriesPointSchemaDefinition;
const PageExternalSocialPostSchemaDefinition = z.object({
    content: z.array(ExternalSocialPostSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageExternalSocialPost
 * @endpoint GET /v1/research/external-social-posts
 * @contractShape pagination.page-external-social-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageExternalSocialPostSchema = PageExternalSocialPostSchemaDefinition;
const PageGithubRepoSchemaDefinition = z.object({
    content: z.array(GithubRepoSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageGithubRepo
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/people/{personId}/repositories
 * @contractShape pagination.page-github-repo
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageGithubRepoSchema = PageGithubRepoSchemaDefinition;
const PageHarnessRunSchemaDefinition = z.object({
    content: z.array(HarnessRunSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageHarnessRun
 * @endpoint GET /v1/harness/control-plane/runs
 * @contractShape pagination.page-harness-run
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageHarnessRunSchema = PageHarnessRunSchemaDefinition;
const PageJobSchemaDefinition = z.object({
    content: z.array(JobSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageJob
 * @endpoint GET /v1/jobs/runs
 * @contractShape pagination.page-job
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageJobSchema = PageJobSchemaDefinition;
const PageLocationDirectoryEntrySchemaDefinition = z.object({
    content: z.array(LocationDirectoryEntrySchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageLocationDirectoryEntry
 * @endpoint GET /v1/addresses/locations/{scope}
 * @contractShape pagination.page-location-directory-entry
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageLocationDirectoryEntrySchema = PageLocationDirectoryEntrySchemaDefinition;
const PageMediaCrawlScreenshotSchemaDefinition = z.object({
    content: z.array(MediaCrawlScreenshotSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageMediaCrawlScreenshot
 * @endpoint GET /v1/media/screenshots
 * @contractShape pagination.page-media-crawl-screenshot
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageMediaCrawlScreenshotSchema = PageMediaCrawlScreenshotSchemaDefinition;
const PageMediaLogoAuditJobSchemaDefinition = z.object({
    content: z.array(MediaLogoAuditJobSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageMediaLogoAuditJob
 * @endpoint GET /v1/media/logo-audit/jobs
 * @contractShape pagination.page-media-logo-audit-job
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageMediaLogoAuditJobSchema = PageMediaLogoAuditJobSchemaDefinition;
const PageNewsSchemaDefinition = z.object({
    content: z.array(NewsSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageNews
 * @endpoint GET /v1/entities/detail/news
 * @endpoint GET /v1/entities/detail/trending-news
 * @endpoint GET /v1/news
 * @endpoint GET /v1/news/recent
 * @endpoint GET /v1/news/similar
 * @endpoint GET /v1/people/detail/news
 * @endpoint POST /v1/news
 * @contractShape pagination.page-news
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageNewsSchema = PageNewsSchemaDefinition;
const PageNewsCandidateScoreSchemaDefinition = z.object({
    content: z.array(NewsCandidateScoreSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageNewsCandidateScore
 * @endpoint GET /v1/news/duplicate-check/candidates
 * @endpoint POST /v1/news/duplicate-check/candidates
 * @contractShape pagination.page-news-candidate-score
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageNewsCandidateScoreSchema = PageNewsCandidateScoreSchemaDefinition;
const PageNewsDetailSchemaDefinition = z.object({
    content: z.array(NewsDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageNewsDetail
 * @endpoint GET /v1/news/duplicate-check
 * @endpoint POST /v1/news/duplicate-check
 * @contractShape pagination.page-news-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageNewsDetailSchema = PageNewsDetailSchemaDefinition;
const PageNewsLinkerCandidateSchemaDefinition = z.object({
    content: z.array(NewsLinkerCandidateSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageNewsLinkerCandidate
 * @endpoint GET /v1/news/linker/candidates
 * @contractShape pagination.page-news-linker-candidate
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageNewsLinkerCandidateSchema = PageNewsLinkerCandidateSchemaDefinition;
const PagePersonSchemaDefinition = z.object({
    content: z.array(PersonSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePerson
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint POST /v1/people
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/duplicate-check
 * @contractShape pagination.page-person
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonSchema = PagePersonSchemaDefinition;
const PagePersonDetailSchemaDefinition = z.object({
    content: z.array(PersonDetailSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonDetail
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @contractShape pagination.page-person-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonDetailSchema = PagePersonDetailSchemaDefinition;
const PagePersonInvestorParticipationSchemaDefinition = z.object({
    content: z.array(PersonInvestorParticipationSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonInvestorParticipation
 * @endpoint GET /v1/entities/detail/person-investors
 * @contractShape pagination.page-person-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonInvestorParticipationSchema = PagePersonInvestorParticipationSchemaDefinition;
const PagePersonSimilarityResultSchemaDefinition = z.object({
    content: z.array(PersonSimilarityResultSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PagePersonSimilarityResult
 * @endpoint GET /v1/people/detail/similar
 * @contractShape pagination.page-person-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PagePersonSimilarityResultSchema = PagePersonSimilarityResultSchemaDefinition;
const PageResultContentSchemaDefinition = z.object({
    content: z.array(ContentSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultContent
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @usedBySchema ContentSearchResultSchema
 * @contractShape pagination.page-result-content
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultContentSchema = PageResultContentSchemaDefinition;
const PageResultEntityListSchemaDefinition = z.object({
    content: z.array(EntityListSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultEntityList
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape pagination.page-result-entity-list
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultEntityListSchema = PageResultEntityListSchemaDefinition;
const PageResultLocationDirectoryEntrySchemaDefinition = z.object({
    content: z.array(LocationDirectoryEntrySchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultLocationDirectoryEntry
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape pagination.page-result-location-directory-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultLocationDirectoryEntrySchema = PageResultLocationDirectoryEntrySchemaDefinition;
const PageResultNewsSchemaDefinition = z.object({
    content: z.array(NewsSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultNews
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape pagination.page-result-news
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultNewsSchema = PageResultNewsSchemaDefinition;
const PageResultPersonSchemaDefinition = z.object({
    content: z.array(PersonSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
/**
 * @openapiSchema PageResultPerson
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape pagination.page-result-person
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultPersonSchema = PageResultPersonSchemaDefinition;
/**
 * @openapiSchema PageResultSitemapUrlSlot
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape pagination.page-result-sitemap-url-slot
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export const PageResultSitemapUrlSlotSchema = z.object({
    content: z.array(SitemapUrlSlotSchema),
    number: z.int(),
    size: z.int(),
    totalElements: z.number().int(),
    totalPages: z.int(),
});
const PageSavedViewSchemaDefinition = z.object({
    content: z.array(SavedViewSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageSavedView
 * @endpoint GET /v1/app/saved-views
 * @contractShape pagination.page-saved-view
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageSavedViewSchema = PageSavedViewSchemaDefinition;
const PageSearchDuplicateCandidateScoreSchemaDefinition = z.object({
    content: z.array(SearchDuplicateCandidateScoreSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageSearchDuplicateCandidateScore
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @contractShape pagination.page-search-duplicate-candidate-score
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageSearchDuplicateCandidateScoreSchema = PageSearchDuplicateCandidateScoreSchemaDefinition;
const PageSitemapUrlSlotSchemaDefinition = z.object({
    content: z.array(SitemapUrlSlotSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageSitemapUrlSlot
 * @endpoint GET /v1/sitemap/url-slots
 * @contractShape pagination.page-sitemap-url-slot
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageSitemapUrlSlotSchema = PageSitemapUrlSlotSchemaDefinition;
const PageSocialMediaPostSchemaDefinition = z.object({
    content: z.array(SocialMediaPostSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageSocialMediaPost
 * @endpoint GET /v1/social/posts
 * @contractShape pagination.page-social-media-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageSocialMediaPostSchema = PageSocialMediaPostSchemaDefinition;
const PageSourceDocumentListSchemaDefinition = z.object({
    content: z.array(SourceDocumentListSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageSourceDocumentList
 * @endpoint GET /v1/research/source-documents
 * @contractShape pagination.page-source-document-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageSourceDocumentListSchema = PageSourceDocumentListSchemaDefinition;
const PageUniqueIdSchemaDefinition = z.object({
    content: z.array(UniqueIdSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageUniqueId
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @contractShape pagination.page-unique-id
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageUniqueIdSchema = PageUniqueIdSchemaDefinition;
const PageUrlSlugRedirectSchemaDefinition = z.object({
    content: z.array(UrlSlugRedirectSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageUrlSlugRedirect
 * @endpoint GET /v1/app/blog/articles/{id}/slug/redirects
 * @endpoint GET /v1/app/pages/{id}/slug/redirects
 * @endpoint GET /v1/entities/{entityId}/slug/redirects
 * @endpoint GET /v1/news/{newsId}/slug/redirects
 * @endpoint GET /v1/people/{personId}/slug/redirects
 * @contractShape pagination.page-url-slug-redirect
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageUrlSlugRedirectSchema = PageUrlSlugRedirectSchemaDefinition;
const PageWebSiteSchemaDefinition = z.object({
    content: z.array(WebSiteSchema).optional(),
    empty: z.boolean().optional(),
    first: z.boolean().optional(),
    last: z.boolean().optional(),
    number: z.int().optional(),
    numberOfElements: z.int().optional(),
    pageable: PageableObjectSchema.optional(),
    size: z.int().optional(),
    sort: SortObjectSchema.optional(),
    totalElements: z.number().int().optional(),
    totalPages: z.int().optional(),
});
/**
 * @openapiSchema PageWebSite
 * @endpoint GET /v1/entities/{entityId}/sites
 * @contractShape pagination.page-web-site
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export const PageWebSiteSchema = PageWebSiteSchemaDefinition;
//# sourceMappingURL=schemas.js.map