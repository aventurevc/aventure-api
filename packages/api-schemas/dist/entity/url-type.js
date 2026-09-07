// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical URL platform type such as website, linkedin, twitter, or github. Lifecycle facts belong on link flags such as isCurrent and isPrimary.
 *
 * @openapiSchema EntityUrlType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities/{entityId}/urls
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint POST /v1/people/{personId}/urls
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
 * @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PATCH /v1/people/{personId}/urls/{urlId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/people/{personId}/urls/{urlId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
 * @endpoint DELETE /v1/people/{personId}/urls/{urlId}
 * @usedBySchema DuplicateUrlCandidateSchema
 * @usedBySchema EntityDuplicateCriteriaSchema
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema EntityUrlLinkSchema
 * @usedBySchema PersonDuplicateCriteriaSchema
 * @contractShape entity.url-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlType.kt
 */
export const EntityUrlTypeSchema = z.enum([
    "website",
    "linkedin",
    "twitter",
    "github",
    "facebook",
    "instagram",
    "tiktok",
    "youtube",
    "subreddit",
    "forum",
    "documentation",
    "support",
    "statuspage",
    "changelog",
    "roadmap",
    "discord",
    "crunchbase",
    "wellfound",
    "angellist",
    "glassdoor",
    "theorg",
    "ycombinator",
    "wikipedia",
    "pitchbook",
    "morningstar",
    "bloomberg",
    "nyse",
    "nasdaq",
    "g2",
    "producthunt",
    "trustpilot",
    "alternativeto",
    "gartnerpeerinsights",
    "getapp",
    "sourceforge",
    "appstore",
    "googleplay",
    "capterra",
    "trustradius",
    "hubspotmarketplace",
    "slackappdirectory",
    "awsmarketplace",
    "salesforceappexchange",
    "chromewebstore",
    "vscodemarketplace",
    "npm",
    "pypi",
    "maven",
    "dockerhub",
    "homebrew",
    "crates",
]);
//# sourceMappingURL=url-type.js.map