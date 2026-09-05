// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebPersonActivitySchema } from "./person-activity.js";
import { WebPersonEducationSchema } from "./person-education.js";
import { WebPersonExperienceSchema } from "./person-experience.js";
import { WebPersonPostSchema } from "./person-post.js";
import { WebProfileAttributeSchema } from "./profile-attribute.js";
import { WebProfileLinkSchema } from "./profile-link.js";
import { WebRelatedProfileSchema } from "./related-profile.js";
const WebPersonProfileSchemaDefinition = z.object({
    /** Self-description / about text */
    about: z.string().nullish(),
    /** Recent activity (posts reacted to / commented on) */
    activity: z.array(WebPersonActivitySchema),
    /** 'People also viewed' related profiles */
    alsoViewedProfile: z.array(WebRelatedProfileSchema),
    /** Source fields not mapped above, preserved as label/value facts */
    attribute: z.array(WebProfileAttributeSchema),
    /** Profile banner / cover image URL */
    bannerUrl: z.string().nullish(),
    /** Profile bio links (personal site, blog, etc.) */
    bioLink: z.array(WebProfileLinkSchema),
    /** City / location text */
    city: z.string().nullish(),
    /** LinkedIn connection count */
    connectionCount: z.int().nullish(),
    /** ISO 3166-1 alpha-2 country code */
    countryCode: z.string().nullish(),
    /** Current company name */
    currentCompany: z.string().nullish(),
    /** Current company location text */
    currentCompanyLocation: z.string().nullish(),
    /** Current company LinkedIn slug */
    currentCompanySlug: z.string().nullish(),
    /** Current company LinkedIn profile URL */
    currentCompanyUrl: z.string().nullish(),
    /** Title at the current company */
    currentTitle: z.string().nullish(),
    /** Education history */
    education: z.array(WebPersonEducationSchema),
    /** Education summary */
    educationDetail: z.string().nullish(),
    /** Employment history, most-recent first */
    experience: z.array(WebPersonExperienceSchema),
    /** Server timestamp when the profile was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** Given name */
    firstName: z.string().nullish(),
    /** LinkedIn follower count */
    followerCount: z.int().nullish(),
    /** Current headline / title line */
    headline: z.string().nullish(),
    /** Flagged as a LinkedIn Influencer */
    influencer: z.boolean().nullish(),
    /** Family name */
    lastName: z.string().nullish(),
    /** LinkedIn internal numeric id */
    linkedinNumericId: z.string().nullish(),
    /** LinkedIn vanity slug */
    linkedinSlug: z.string().nullish(),
    /** Short location label */
    locationName: z.string().nullish(),
    /** Account is memorialised */
    memorializedAccount: z.boolean().nullish(),
    /** Full name */
    name: z.string(),
    /** Direct headshot photo URL; null when LinkedIn serves its default ghost avatar */
    photoUrl: z.string().nullish(),
    /** Recent posts authored by the person */
    post: z.array(WebPersonPostSchema),
    /** Canonical LinkedIn profile URL */
    profileUrl: z.string().nullish(),
    /** Similar profiles surfaced by LinkedIn */
    similarProfile: z.array(WebRelatedProfileSchema),
    /** Source LinkedIn profile URL that was scraped */
    sourceUrl: z.string(),
});
/**
 * Structured public profile of a person from a LinkedIn profile URL.
 *
 * @openapiSchema WebPersonProfile
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.person-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebPersonProfileSchema = WebPersonProfileSchemaDefinition;
//# sourceMappingURL=person-profile.js.map