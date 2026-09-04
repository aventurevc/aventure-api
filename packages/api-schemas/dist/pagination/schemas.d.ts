import { z } from "zod/v4";
declare const PageAventureBlogArticleListSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        author?: {
            avatar?: string | null | undefined;
            id: string;
            name: string;
            slug: string;
            title?: string | null | undefined;
        } | null | undefined;
        category: {
            name: string;
            slug: string;
        }[];
        excerpt: string;
        id: number;
        image?: {
            alt?: string | null | undefined;
            url: string;
        } | null | undefined;
        publishedAt?: string | null | undefined;
        readingTime: number;
        slug: string;
        status: string;
        tag: {
            name: string;
            slug: string;
        }[];
        title: string;
        updatedAt: string;
        viewCount: number;
        wordCount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: {
            avatar?: string | null | undefined;
            id: string;
            name: string;
            slug: string;
            title?: string | null | undefined;
        } | null | undefined;
        category: {
            name: string;
            slug: string;
        }[];
        excerpt: string;
        id: number;
        image?: {
            alt?: string | null | undefined;
            url: string;
        } | null | undefined;
        publishedAt?: string | null | undefined;
        readingTime: number;
        slug: string;
        status: string;
        tag: {
            name: string;
            slug: string;
        }[];
        title: string;
        updatedAt: string;
        viewCount: number;
        wordCount: number;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageAventureBlogArticleListDefinition = z.infer<typeof PageAventureBlogArticleListSchemaDefinition>;
/**
 * @openapiSchema PageAventureBlogArticleList
 * @endpoint GET /v1/app/blog/articles
 * @endpoint GET /v1/app/blog/articles/featured
 * @contractShape pagination.page-aventure-blog-article-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageAventureBlogArticleListSchema: z.ZodType<PageAventureBlogArticleListDefinition>;
export type PageAventureBlogArticleList = z.infer<typeof PageAventureBlogArticleListSchema>;
declare const PageBlogPostSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        author?: string | null | undefined;
        createdAt: string;
        externalId?: string | null | undefined;
        id: string;
        isCurrent: boolean;
        lastFetchedAt?: string | null | undefined;
        mentionedEntityId: string[];
        mentionedPersonId: string[];
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        publishedAt?: string | null | undefined;
        summary?: string | null | undefined;
        summaryGeneratedAt?: string | null | undefined;
        title?: string | null | undefined;
        topic?: string | null | undefined;
        type: "aventureBlog" | "employerBlog" | "linkedin" | "medium" | "other" | "personalBlog" | "substack" | "xTwitter";
        updatedAt: string;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: string | null | undefined;
        createdAt: string;
        externalId?: string | null | undefined;
        id: string;
        isCurrent: boolean;
        lastFetchedAt?: string | null | undefined;
        mentionedEntityId: string[];
        mentionedPersonId: string[];
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        publishedAt?: string | null | undefined;
        summary?: string | null | undefined;
        summaryGeneratedAt?: string | null | undefined;
        title?: string | null | undefined;
        topic?: string | null | undefined;
        type: "aventureBlog" | "employerBlog" | "linkedin" | "medium" | "other" | "personalBlog" | "substack" | "xTwitter";
        updatedAt: string;
        url: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageBlogPostDefinition = z.infer<typeof PageBlogPostSchemaDefinition>;
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
export declare const PageBlogPostSchema: z.ZodType<PageBlogPostDefinition>;
export type PageBlogPost = z.infer<typeof PageBlogPostSchema>;
declare const PageClassificationSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        bucket?: string | null | undefined;
        classificationId?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        slug?: string | null | undefined;
        type: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        bucket?: string | null | undefined;
        classificationId?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        slug?: string | null | undefined;
        type: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown>>, z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown>>]>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageClassificationDefinition = z.infer<typeof PageClassificationSchemaDefinition>;
/**
 * @openapiSchema PageClassification
 * @endpoint GET /v1/classifications/search
 * @contractShape pagination.page-classification
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageClassificationSchema: z.ZodType<PageClassificationDefinition>;
export type PageClassification = z.infer<typeof PageClassificationSchema>;
declare const PageCliAuthorizationSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        approvedAt?: string | null | undefined;
        clientLabel: string;
        clientPlatform: "LINUX" | "MACOS" | "OTHER" | "WINDOWS";
        comparisonCode: string;
        consumedAt?: string | null | undefined;
        createdAt: string;
        expiresAt: string;
        id: string;
        intervalSeconds: number;
        keyReadyAt?: string | null | undefined;
        status: "CONSUMED" | "DENIED" | "EXPIRED" | "FAILED" | "ISSUING" | "KEY_READY" | "PENDING" | "REVOKED" | "REVOKING";
        terminalAt?: string | null | undefined;
        terminalReason?: "Authorization request expired" | "CLI authorization expired before acknowledgement" | "Clerk create response validation failed" | "Credential delivery encryption failed" | "Credential issuance could not be recovered" | "Credential issuance failed" | "Credential issuance finalization was lost" | "Credential issuance lost its database claim" | "Credential issuance recovery revoked an unrecoverable key" | "Denied by user" | "Personal API-key quota reached" | "Revoked by user" | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        approvedAt?: string | null | undefined;
        clientLabel: string;
        clientPlatform: "LINUX" | "MACOS" | "OTHER" | "WINDOWS";
        comparisonCode: string;
        consumedAt?: string | null | undefined;
        createdAt: string;
        expiresAt: string;
        id: string;
        intervalSeconds: number;
        keyReadyAt?: string | null | undefined;
        status: "CONSUMED" | "DENIED" | "EXPIRED" | "FAILED" | "ISSUING" | "KEY_READY" | "PENDING" | "REVOKED" | "REVOKING";
        terminalAt?: string | null | undefined;
        terminalReason?: "Authorization request expired" | "CLI authorization expired before acknowledgement" | "Clerk create response validation failed" | "Credential delivery encryption failed" | "Credential issuance could not be recovered" | "Credential issuance failed" | "Credential issuance finalization was lost" | "Credential issuance lost its database claim" | "Credential issuance recovery revoked an unrecoverable key" | "Denied by user" | "Personal API-key quota reached" | "Revoked by user" | null | undefined;
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageCliAuthorizationDefinition = z.infer<typeof PageCliAuthorizationSchemaDefinition>;
/**
 * @openapiSchema PageCliAuthorization
 * @endpoint GET /v1/app/cli-authorizations
 * @contractShape pagination.page-cli-authorization
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageCliAuthorizationSchema: z.ZodType<PageCliAuthorizationDefinition>;
export type PageCliAuthorization = z.infer<typeof PageCliAuthorizationSchema>;
declare const PageContentSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        canonicalUrl?: string | null | undefined;
        contentId: string;
        contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
        createdAt?: string | null | undefined;
        publishedAt?: string | null | undefined;
        relation?: "about" | "by" | null | undefined;
        sourceDomain?: string | null | undefined;
        sourceName?: string | null | undefined;
        summary?: string | null | undefined;
        title: string;
        topic?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        canonicalUrl?: string | null | undefined;
        contentId: string;
        contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
        createdAt?: string | null | undefined;
        publishedAt?: string | null | undefined;
        relation?: "about" | "by" | null | undefined;
        sourceDomain?: string | null | undefined;
        sourceName?: string | null | undefined;
        summary?: string | null | undefined;
        title: string;
        topic?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageContentDefinition = z.infer<typeof PageContentSchemaDefinition>;
/**
 * @openapiSchema PageContent
 * @endpoint GET /v1/content
 * @endpoint GET /v1/entities/{entityId}/content
 * @endpoint GET /v1/people/{personId}/content
 * @contractShape pagination.page-content
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageContentSchema: z.ZodType<PageContentDefinition>;
export type PageContent = z.infer<typeof PageContentSchema>;
declare const PageContentPageListSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        author?: {
            avatar?: string | null | undefined;
            id: string;
            name: string;
            slug: string;
            title?: string | null | undefined;
        } | null | undefined;
        category: {
            name: string;
            slug: string;
        }[];
        excerpt: string;
        id: number;
        image?: {
            alt?: string | null | undefined;
            url: string;
        } | null | undefined;
        publishedAt?: string | null | undefined;
        readingTime: number;
        slug: string;
        status: string;
        tag: {
            name: string;
            slug: string;
        }[];
        title: string;
        updatedAt: string;
        viewCount: number;
        wordCount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: {
            avatar?: string | null | undefined;
            id: string;
            name: string;
            slug: string;
            title?: string | null | undefined;
        } | null | undefined;
        category: {
            name: string;
            slug: string;
        }[];
        excerpt: string;
        id: number;
        image?: {
            alt?: string | null | undefined;
            url: string;
        } | null | undefined;
        publishedAt?: string | null | undefined;
        readingTime: number;
        slug: string;
        status: string;
        tag: {
            name: string;
            slug: string;
        }[];
        title: string;
        updatedAt: string;
        viewCount: number;
        wordCount: number;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageContentPageListDefinition = z.infer<typeof PageContentPageListSchemaDefinition>;
/**
 * @openapiSchema PageContentPageList
 * @endpoint GET /v1/app/pages
 * @endpoint GET /v1/app/pages/featured
 * @contractShape pagination.page-content-page-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageContentPageListSchema: z.ZodType<PageContentPageListDefinition>;
export type PageContentPageList = z.infer<typeof PageContentPageListSchema>;
declare const PageContentTaxonomyCountSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        articleCount: number;
        latestArticleUpdatedAt?: string | null | undefined;
        slug: string;
    }, unknown, z.core.$ZodTypeInternals<{
        articleCount: number;
        latestArticleUpdatedAt?: string | null | undefined;
        slug: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageContentTaxonomyCountDefinition = z.infer<typeof PageContentTaxonomyCountSchemaDefinition>;
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
export declare const PageContentTaxonomyCountSchema: z.ZodType<PageContentTaxonomyCountDefinition>;
export type PageContentTaxonomyCount = z.infer<typeof PageContentTaxonomyCountSchema>;
declare const PageDatasourceFieldProvenanceSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        actor?: {
            agent?: {
                chassis: string;
                model: string;
                modelFamily: string;
            } | null | undefined;
            displayName: string;
            employeeDisplayName?: string | null | undefined;
            employeeUserId?: string | null | undefined;
            type: "agent" | "employee";
        } | null | undefined;
        changedBy?: string | null | undefined;
        changes: {
            fieldName: string;
            newPresent: boolean;
            newValue?: string | null | undefined;
            oldPresent: boolean;
            oldValue?: string | null | undefined;
        }[];
        effectiveAt: string;
        entityId?: string | null | undefined;
        eventId: string;
        id: number;
        operation: "delete" | "insert" | "update";
        personId?: string | null | undefined;
        recordId: string;
        source: {
            actorType?: "agent" | "employee" | undefined;
            agentChassis?: string | null | undefined;
            agentModel?: string | null | undefined;
            sourceDetail: string;
            sourceProvider?: string | null | undefined;
            sourceProviderId?: string | null | undefined;
            sourceProviderSlug?: string | null | undefined;
            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
        };
        status: "confirmed" | "disputedAnonymous" | "disputedFirstParty" | "disputedRelatedParty" | "disputedThirdParty" | "unconfirmed";
        tableName: "deployTarget" | "entity" | "entityAddressJoin" | "entityClassificationJoin" | "entityDetail" | "entityPersonJoin" | "entityRelationship" | "entityResearchSnippets" | "entityTypeJoin" | "fundraiseTransaction" | "fundraiseTransactionInvestorJoin" | "newsArticle" | "newsArticleEntityJoin" | "newsArticlePersonJoin" | "person" | "personAddressJoin" | "text" | "urlLink";
    }, unknown, z.core.$ZodTypeInternals<{
        actor?: {
            agent?: {
                chassis: string;
                model: string;
                modelFamily: string;
            } | null | undefined;
            displayName: string;
            employeeDisplayName?: string | null | undefined;
            employeeUserId?: string | null | undefined;
            type: "agent" | "employee";
        } | null | undefined;
        changedBy?: string | null | undefined;
        changes: {
            fieldName: string;
            newPresent: boolean;
            newValue?: string | null | undefined;
            oldPresent: boolean;
            oldValue?: string | null | undefined;
        }[];
        effectiveAt: string;
        entityId?: string | null | undefined;
        eventId: string;
        id: number;
        operation: "delete" | "insert" | "update";
        personId?: string | null | undefined;
        recordId: string;
        source: {
            actorType?: "agent" | "employee" | undefined;
            agentChassis?: string | null | undefined;
            agentModel?: string | null | undefined;
            sourceDetail: string;
            sourceProvider?: string | null | undefined;
            sourceProviderId?: string | null | undefined;
            sourceProviderSlug?: string | null | undefined;
            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
        };
        status: "confirmed" | "disputedAnonymous" | "disputedFirstParty" | "disputedRelatedParty" | "disputedThirdParty" | "unconfirmed";
        tableName: "deployTarget" | "entity" | "entityAddressJoin" | "entityClassificationJoin" | "entityDetail" | "entityPersonJoin" | "entityRelationship" | "entityResearchSnippets" | "entityTypeJoin" | "fundraiseTransaction" | "fundraiseTransactionInvestorJoin" | "newsArticle" | "newsArticleEntityJoin" | "newsArticlePersonJoin" | "person" | "personAddressJoin" | "text" | "urlLink";
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageDatasourceFieldProvenanceDefinition = z.infer<typeof PageDatasourceFieldProvenanceSchemaDefinition>;
/**
 * @openapiSchema PageDatasourceFieldProvenance
 * @endpoint GET /v1/provenance/history
 * @contractShape pagination.page-datasource-field-provenance
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageDatasourceFieldProvenanceSchema: z.ZodType<PageDatasourceFieldProvenanceDefinition>;
export type PageDatasourceFieldProvenance = z.infer<typeof PageDatasourceFieldProvenanceSchema>;
declare const PageDeployEventSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        cursorDeploymentId?: string | null | undefined;
        cursorServiceVersion?: number | null | undefined;
        deploymentId?: string | null | undefined;
        desiredReplicas?: number | null | undefined;
        environment: string;
        eventId: string;
        fromImage?: string | null | undefined;
        fromRuntimeImageId?: string | null | undefined;
        id: number;
        message?: string | null | undefined;
        mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
        operationId?: string | null | undefined;
        outcome: "Failure" | "Submitted" | "Submitting" | "Success";
        phase: "Candidate" | "Compensation" | "PolicyBaseline";
        runtimeTaskEvidence: {
            latencyMillis: number;
            revision: string;
            statusCode: number;
            taskToken: string;
        }[];
        targetName: string;
        taskToken: string[];
        toImage: string;
        toRuntimeImageId?: string | null | undefined;
        triggeredAt: string;
        triggeredBy: string;
    }, unknown, z.core.$ZodTypeInternals<{
        cursorDeploymentId?: string | null | undefined;
        cursorServiceVersion?: number | null | undefined;
        deploymentId?: string | null | undefined;
        desiredReplicas?: number | null | undefined;
        environment: string;
        eventId: string;
        fromImage?: string | null | undefined;
        fromRuntimeImageId?: string | null | undefined;
        id: number;
        message?: string | null | undefined;
        mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
        operationId?: string | null | undefined;
        outcome: "Failure" | "Submitted" | "Submitting" | "Success";
        phase: "Candidate" | "Compensation" | "PolicyBaseline";
        runtimeTaskEvidence: {
            latencyMillis: number;
            revision: string;
            statusCode: number;
            taskToken: string;
        }[];
        targetName: string;
        taskToken: string[];
        toImage: string;
        toRuntimeImageId?: string | null | undefined;
        triggeredAt: string;
        triggeredBy: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageDeployEventDefinition = z.infer<typeof PageDeployEventSchemaDefinition>;
/**
 * @openapiSchema PageDeployEvent
 * @endpoint GET /v1/deploy/events
 * @contractShape pagination.page-deploy-event
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageDeployEventSchema: z.ZodType<PageDeployEventDefinition>;
export type PageDeployEvent = z.infer<typeof PageDeployEventSchema>;
declare const PageEmployeeCountSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        asOfDate: z.ZodISODateTime;
        fact: z.ZodType<{
            asOfDate?: string | null | undefined;
            dataConfidence?: "high" | "low" | "medium" | null | undefined;
            dateValue?: string | null | undefined;
            numericValue?: number | null | undefined;
            referenceValue?: string | null | undefined;
            source?: string | null | undefined;
            textValue?: string | null | undefined;
            updatedAt?: string | null | undefined;
            valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
        }, unknown, z.core.$ZodTypeInternals<{
            asOfDate?: string | null | undefined;
            dataConfidence?: "high" | "low" | "medium" | null | undefined;
            dateValue?: string | null | undefined;
            numericValue?: number | null | undefined;
            referenceValue?: string | null | undefined;
            source?: string | null | undefined;
            textValue?: string | null | undefined;
            updatedAt?: string | null | undefined;
            valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
        }, unknown>>;
        id: z.ZodString;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEmployeeCountDefinition = z.infer<typeof PageEmployeeCountSchemaDefinition>;
/**
 * @openapiSchema PageEmployeeCount
 * @endpoint GET /v1/entities/detail/people/time-series
 * @contractShape pagination.page-employee-count
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEmployeeCountSchema: z.ZodType<PageEmployeeCountDefinition>;
export type PageEmployeeCount = z.infer<typeof PageEmployeeCountSchema>;
declare const PageEntitySchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodObject<{
            isFeatured: z.ZodBoolean;
            isHidden: z.ZodBoolean;
            isVerified: z.ZodBoolean;
            showOnSitemap: z.ZodBoolean;
        }, z.core.$strip>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityDefinition = z.infer<typeof PageEntitySchemaDefinition>;
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
export declare const PageEntitySchema: z.ZodType<PageEntityDefinition>;
export type PageEntity = z.infer<typeof PageEntitySchema>;
declare const PageEntityAcquisitionSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        acquiredEntity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        acquirerEntity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        amount?: number | null | undefined;
        announcedAt?: string | null | undefined;
        asOf?: string | null | undefined;
        completedAt?: string | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        evidence: {
            fundraiseInvestorJoin: boolean;
            fundraiseTransaction: boolean;
            operatingStatus: boolean;
            relationship: boolean;
        };
        fundraiseTransactionId?: string | null | undefined;
        investorJoinId?: string | null | undefined;
        relationshipId: number;
        source?: string | null | undefined;
        status: "Acquired" | "Acquired Subsidiary" | "Acquisition";
        transactionStatus?: "Active" | "Announced" | "Announced; subject to approvals and closing conditions" | "Closed" | "Completed" | "In Progress" | "Open" | null | undefined;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        acquiredEntity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        acquirerEntity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        amount?: number | null | undefined;
        announcedAt?: string | null | undefined;
        asOf?: string | null | undefined;
        completedAt?: string | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        evidence: {
            fundraiseInvestorJoin: boolean;
            fundraiseTransaction: boolean;
            operatingStatus: boolean;
            relationship: boolean;
        };
        fundraiseTransactionId?: string | null | undefined;
        investorJoinId?: string | null | undefined;
        relationshipId: number;
        source?: string | null | undefined;
        status: "Acquired" | "Acquired Subsidiary" | "Acquisition";
        transactionStatus?: "Active" | "Announced" | "Announced; subject to approvals and closing conditions" | "Closed" | "Completed" | "In Progress" | "Open" | null | undefined;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityAcquisitionDefinition = z.infer<typeof PageEntityAcquisitionSchemaDefinition>;
/**
 * @openapiSchema PageEntityAcquisition
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @contractShape pagination.page-entity-acquisition
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityAcquisitionSchema: z.ZodType<PageEntityAcquisitionDefinition>;
export type PageEntityAcquisition = z.infer<typeof PageEntityAcquisitionSchema>;
declare const PageEntityDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        core: z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            id: z.ZodUUID;
            image: z.ZodType<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            }, unknown>>;
            lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            nameAlias: z.ZodArray<z.ZodType<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }, unknown>>>;
            nameBrand: z.ZodString;
            nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                hasAnalysis: z.ZodBoolean;
                hasEmployees: z.ZodBoolean;
                hasFundraising: z.ZodBoolean;
                hasNews: z.ZodBoolean;
                productServiceSlug: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
            slug: z.ZodString;
            source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
                dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
                detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            status: z.ZodOptional<z.ZodObject<{
                isFeatured: z.ZodBoolean;
                isHidden: z.ZodBoolean;
                isVerified: z.ZodBoolean;
                showOnSitemap: z.ZodBoolean;
            }, z.core.$strip>>;
            typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                "Business Line": "Business Line";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                Organization: "Organization";
                Product: "Product";
                Service: "Service";
            }>>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>;
        enrichment: z.ZodType<{
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        }, unknown, z.core.$ZodTypeInternals<{
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        }, unknown>>;
        fundraiseRound: z.ZodArray<z.ZodType<{
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }, unknown>>>;
        newsArticle: z.ZodArray<z.ZodType<{
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        }, unknown>>>;
        person: z.ZodArray<z.ZodType<{
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                endDate?: string | null | undefined;
                entityAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                entityId: string;
                entityIsHidden?: boolean | null | undefined;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entityShowOnSitemap?: boolean | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                isCurrent?: boolean | null | undefined;
                personAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            core: {
                createdAt?: string | null | undefined;
                gender?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                nameFirst?: string | null | undefined;
                nameFull: string;
                nameLast?: string | null | undefined;
                nameMiddle?: string | null | undefined;
                nickname?: string | null | undefined;
                publicId?: string | null | undefined;
                semanticMatch?: {
                    computedAt: string;
                    cosineDistance: number;
                    cosineScore: number;
                    modelVersion: string;
                    rank: number;
                    sourceHash: string;
                    sourceId: string;
                    sourceJson: string;
                    sourceText: string;
                    sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                } | null | undefined;
                slug: string;
                source: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                };
                status?: {
                    isHidden: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                suffix?: string | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            pendingApproval?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                endDate?: string | null | undefined;
                entityAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                entityId: string;
                entityIsHidden?: boolean | null | undefined;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entityShowOnSitemap?: boolean | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                isCurrent?: boolean | null | undefined;
                personAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            core: {
                createdAt?: string | null | undefined;
                gender?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                nameFirst?: string | null | undefined;
                nameFull: string;
                nameLast?: string | null | undefined;
                nameMiddle?: string | null | undefined;
                nickname?: string | null | undefined;
                publicId?: string | null | undefined;
                semanticMatch?: {
                    computedAt: string;
                    cosineDistance: number;
                    cosineScore: number;
                    modelVersion: string;
                    rank: number;
                    sourceHash: string;
                    sourceId: string;
                    sourceJson: string;
                    sourceText: string;
                    sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                } | null | undefined;
                slug: string;
                source: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                };
                status?: {
                    isHidden: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                suffix?: string | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            pendingApproval?: number | null | undefined;
        }, unknown>>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        relationship: z.ZodArray<z.ZodType<{
            asOf?: string | null | undefined;
            comparisonSignals?: {
                fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                ownership: string[];
                pricingModel: string[];
                sellsTo: string[];
                totalRaised?: number | null | undefined;
                website?: string | null | undefined;
            } | null | undefined;
            createdAt?: string | null | undefined;
            detail?: string | null | undefined;
            entity: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            relationship: /*elided*/ any[];
            relationshipType: string;
            source?: string | null | undefined;
            sourceEntityId?: string | null | undefined;
            targetEntityId?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            asOf?: string | null | undefined;
            comparisonSignals?: {
                fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                ownership: string[];
                pricingModel: string[];
                sellsTo: string[];
                totalRaised?: number | null | undefined;
                website?: string | null | undefined;
            } | null | undefined;
            createdAt?: string | null | undefined;
            detail?: string | null | undefined;
            entity: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            relationship: any[];
            relationshipType: string;
            source?: string | null | undefined;
            sourceEntityId?: string | null | undefined;
            targetEntityId?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }, unknown>>>;
        research: z.ZodType<{
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
            snippet: {
                compliance?: {
                    characterCount: number;
                    meetsRequirements: boolean;
                    violation: string[];
                    wordCount: number;
                } | null | undefined;
                createdAt?: string | null | undefined;
                entityId: string;
                id: number;
                isCurrent: boolean;
                isPrimary: boolean;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                text: string;
                textType: string;
                updatedAt?: string | null | undefined;
                visible: boolean;
            }[];
        }, unknown, z.core.$ZodTypeInternals<{
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
            snippet: {
                compliance?: {
                    characterCount: number;
                    meetsRequirements: boolean;
                    violation: string[];
                    wordCount: number;
                } | null | undefined;
                createdAt?: string | null | undefined;
                entityId: string;
                id: number;
                isCurrent: boolean;
                isPrimary: boolean;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                text: string;
                textType: string;
                updatedAt?: string | null | undefined;
                visible: boolean;
            }[];
        }, unknown>>;
        sitemap: z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        uniqueId: z.ZodArray<z.ZodType<{
            createdAt: string;
            id: number;
            identifier: string;
            idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            source?: string | null | undefined;
            updatedAt: string;
        }, unknown, z.core.$ZodTypeInternals<{
            createdAt: string;
            id: number;
            identifier: string;
            idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
            owner: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            source?: string | null | undefined;
            updatedAt: string;
        }, unknown>>>;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityDetailDefinition = z.infer<typeof PageEntityDetailSchemaDefinition>;
/**
 * @openapiSchema PageEntityDetail
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @contractShape pagination.page-entity-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityDetailSchema: z.ZodType<PageEntityDetailDefinition>;
export type PageEntityDetail = z.infer<typeof PageEntityDetailSchema>;
declare const PageEntityFundraiseInvestorJoinSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        amountInvested?: number | null | undefined;
        createdAt: string;
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
        id: string;
        investor: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        leadInvestor: boolean;
        transactionId: string;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        amountInvested?: number | null | undefined;
        createdAt: string;
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
        id: string;
        investor: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        leadInvestor: boolean;
        transactionId: string;
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityFundraiseInvestorJoinDefinition = z.infer<typeof PageEntityFundraiseInvestorJoinSchemaDefinition>;
/**
 * @openapiSchema PageEntityFundraiseInvestorJoin
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @contractShape pagination.page-entity-fundraise-investor-join
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityFundraiseInvestorJoinSchema: z.ZodType<PageEntityFundraiseInvestorJoinDefinition>;
export type PageEntityFundraiseInvestorJoin = z.infer<typeof PageEntityFundraiseInvestorJoinSchema>;
declare const PageEntityFundraiseTransactionSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        amountRaised?: number | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        dateAnnounced?: string | null | undefined;
        dateFundingComplete?: string | null | undefined;
        dateInvestorExit?: string | null | undefined;
        entity?: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
        } | null | undefined;
        id: string;
        investorAttribution?: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        } | null | undefined;
        investorCount?: number | null | undefined;
        round?: string | null | undefined;
        sourceAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        updatedAt?: string | null | undefined;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        amountRaised?: number | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        dateAnnounced?: string | null | undefined;
        dateFundingComplete?: string | null | undefined;
        dateInvestorExit?: string | null | undefined;
        entity?: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
        } | null | undefined;
        id: string;
        investorAttribution?: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        } | null | undefined;
        investorCount?: number | null | undefined;
        round?: string | null | undefined;
        sourceAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        updatedAt?: string | null | undefined;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityFundraiseTransactionDefinition = z.infer<typeof PageEntityFundraiseTransactionSchemaDefinition>;
/**
 * @openapiSchema PageEntityFundraiseTransaction
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @contractShape pagination.page-entity-fundraise-transaction
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityFundraiseTransactionSchema: z.ZodType<PageEntityFundraiseTransactionDefinition>;
export type PageEntityFundraiseTransaction = z.infer<typeof PageEntityFundraiseTransactionSchema>;
declare const PageEntityInvestorParticipationSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            newsArticle: {
                author?: string | null | undefined;
                category?: string | null | undefined;
                createdAt?: string | null | undefined;
                excerpt?: string | null | undefined;
                externalNewsArticle?: boolean | null | undefined;
                id: number;
                newsImageThumbnail?: string | null | undefined;
                newsUrlOriginal?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                publication?: string | null | undefined;
                publishedAt?: string | null | undefined;
                slug?: string | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | undefined;
                title: string;
                updatedAt?: string | null | undefined;
            }[];
            person: {
                articleCount?: number | null | undefined;
                association: {
                    associationId: number;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    endDate?: string | null | undefined;
                    entityAddress: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    entityId: string;
                    entityIsHidden?: boolean | null | undefined;
                    entityLogo: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    entityName?: string | null | undefined;
                    entityOperatingStatus?: string | null | undefined;
                    entityShowOnSitemap?: boolean | null | undefined;
                    entitySlug: string;
                    entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    entityUrlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                    isCurrent?: boolean | null | undefined;
                    personAddress: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    personUrlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                    score?: number | null | undefined;
                    startDate?: string | null | undefined;
                    titleFunction?: string | null | undefined;
                    titleId?: number | null | undefined;
                    titleLevel?: string | null | undefined;
                    titleName?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                core: {
                    createdAt?: string | null | undefined;
                    gender?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                    }[];
                    nameFirst?: string | null | undefined;
                    nameFull: string;
                    nameLast?: string | null | undefined;
                    nameMiddle?: string | null | undefined;
                    nickname?: string | null | undefined;
                    publicId?: string | null | undefined;
                    semanticMatch?: {
                        computedAt: string;
                        cosineDistance: number;
                        cosineScore: number;
                        modelVersion: string;
                        rank: number;
                        sourceHash: string;
                        sourceId: string;
                        sourceJson: string;
                        sourceText: string;
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                    slug: string;
                    source: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    };
                    status?: {
                        isHidden: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    suffix?: string | null | undefined;
                    text: {
                        expanded?: string | null | undefined;
                        generatedDescription?: string | null | undefined;
                        short?: string | null | undefined;
                    };
                    updatedAt?: string | null | undefined;
                };
                enrichment: {
                    address: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    urlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                };
                investment: {
                    amount?: number | null | undefined;
                    company: {
                        entity: {
                            createdAt?: string | null | undefined;
                            defaultCurrency?: string | null | undefined;
                            foundedYear?: number | null | undefined;
                            id: string;
                            image: {
                                isMonogram: boolean;
                                logo?: string | null | undefined;
                                logoSquare?: string | null | undefined;
                            };
                            lastModifiedAt?: string | null | undefined;
                            nameAlias: {
                                displayable?: boolean | null | undefined;
                                name: string;
                                type?: "alternativeDba" | "relatedLegal" | null | undefined;
                            }[];
                            nameBrand: string;
                            nameLegal?: string | null | undefined;
                            operatingStatus?: string | null | undefined;
                            publicId?: string | null | undefined;
                            publicUrl?: string | null | undefined;
                            sitemap?: {
                                hasAcquisitions?: boolean | undefined;
                                hasAnalysis: boolean;
                                hasEmployees: boolean;
                                hasFundraising: boolean;
                                hasNews: boolean;
                                productServiceSlug: string[];
                            } | null | undefined;
                            slug: string;
                            source?: {
                                changedAt?: string | null | undefined;
                                dataSourceUpdatedAt?: string | null | undefined;
                                detail?: string | null | undefined;
                                kind?: string | null | undefined;
                                pendingApproval?: number | null | undefined;
                                sourceId?: string | null | undefined;
                                status?: string | null | undefined;
                            } | null | undefined;
                            status?: {
                                isFeatured: boolean;
                                isHidden: boolean;
                                isVerified: boolean;
                                showOnSitemap: boolean;
                            } | undefined;
                            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                            updatedAt?: string | null | undefined;
                        };
                    };
                    date?: string | null | undefined;
                    fundraiseTransaction?: {
                        amountRaised?: number | null | undefined;
                        dateAnnounced?: string | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        investorCount?: number | null | undefined;
                        nameBrand: string;
                        round?: string | null | undefined;
                        status?: string | null | undefined;
                        valuationPostMoney?: number | null | undefined;
                    } | null | undefined;
                    fundraiseTransactionId: string;
                    id: string;
                    investmentDate: string;
                    investorAttribution?: {
                        amountInvested?: number | null | undefined;
                        attributionType: "direct" | "managedFund";
                        beneficialEntityId?: string | null | undefined;
                        fundManagerRelationshipId?: number | null | undefined;
                        joinId: string;
                        leadInvestor: boolean;
                        recordedEntityId?: string | null | undefined;
                        round?: {
                            round: string;
                        } | null | undefined;
                        transactionId: string;
                    } | null | undefined;
                    round?: string | null | undefined;
                }[];
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                pendingApproval?: number | null | undefined;
            }[];
            publicUrl?: string | null | undefined;
            relationship: {
                asOf?: string | null | undefined;
                comparisonSignals?: {
                    fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    ownership: string[];
                    pricingModel: string[];
                    sellsTo: string[];
                    totalRaised?: number | null | undefined;
                    website?: string | null | undefined;
                } | null | undefined;
                createdAt?: string | null | undefined;
                detail?: string | null | undefined;
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                relationship: /*elided*/ any[];
                relationshipType: string;
                source?: string | null | undefined;
                sourceEntityId?: string | null | undefined;
                targetEntityId?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
                    accelerator: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
                    asOfDate?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    dataConfidence?: "high" | "low" | "medium" | null | undefined;
                    derivedRange?: {
                        asOfDate: string;
                        bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                        monthsFromNow: number;
                        targetDate: string;
                    } | null | undefined;
                    discreteValue?: number | null | undefined;
                    entityId: string;
                    id: number;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
                snippet: {
                    compliance?: {
                        characterCount: number;
                        meetsRequirements: boolean;
                        violation: string[];
                        wordCount: number;
                    } | null | undefined;
                    createdAt?: string | null | undefined;
                    entityId: string;
                    id: number;
                    isCurrent: boolean;
                    isPrimary: boolean;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    text: string;
                    textType: string;
                    updatedAt?: string | null | undefined;
                    visible: boolean;
                }[];
            };
            sitemap: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            };
            uniqueId: {
                createdAt: string;
                id: number;
                identifier: string;
                idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                source?: string | null | undefined;
                updatedAt: string;
            }[];
        };
        investorAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        round: {
            round: string;
        }[];
        roundCount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            newsArticle: {
                author?: string | null | undefined;
                category?: string | null | undefined;
                createdAt?: string | null | undefined;
                excerpt?: string | null | undefined;
                externalNewsArticle?: boolean | null | undefined;
                id: number;
                newsImageThumbnail?: string | null | undefined;
                newsUrlOriginal?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                publication?: string | null | undefined;
                publishedAt?: string | null | undefined;
                slug?: string | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | undefined;
                title: string;
                updatedAt?: string | null | undefined;
            }[];
            person: {
                articleCount?: number | null | undefined;
                association: {
                    associationId: number;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    endDate?: string | null | undefined;
                    entityAddress: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    entityId: string;
                    entityIsHidden?: boolean | null | undefined;
                    entityLogo: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    entityName?: string | null | undefined;
                    entityOperatingStatus?: string | null | undefined;
                    entityShowOnSitemap?: boolean | null | undefined;
                    entitySlug: string;
                    entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    entityUrlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                    isCurrent?: boolean | null | undefined;
                    personAddress: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    personId: string;
                    personImage: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    personName: string;
                    personSlug: string;
                    personUrlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                    score?: number | null | undefined;
                    startDate?: string | null | undefined;
                    titleFunction?: string | null | undefined;
                    titleId?: number | null | undefined;
                    titleLevel?: string | null | undefined;
                    titleName?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                core: {
                    createdAt?: string | null | undefined;
                    gender?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        picture?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                    }[];
                    nameFirst?: string | null | undefined;
                    nameFull: string;
                    nameLast?: string | null | undefined;
                    nameMiddle?: string | null | undefined;
                    nickname?: string | null | undefined;
                    publicId?: string | null | undefined;
                    semanticMatch?: {
                        computedAt: string;
                        cosineDistance: number;
                        cosineScore: number;
                        modelVersion: string;
                        rank: number;
                        sourceHash: string;
                        sourceId: string;
                        sourceJson: string;
                        sourceText: string;
                        sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                    } | null | undefined;
                    slug: string;
                    source: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    };
                    status?: {
                        isHidden: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    suffix?: string | null | undefined;
                    text: {
                        expanded?: string | null | undefined;
                        generatedDescription?: string | null | undefined;
                        short?: string | null | undefined;
                    };
                    updatedAt?: string | null | undefined;
                };
                enrichment: {
                    address: {
                        address?: number | null | undefined;
                        addressLine1?: string | null | undefined;
                        addressLine2?: string | null | undefined;
                        association?: {
                            endDate?: string | null | undefined;
                            id: number;
                            isCurrent: boolean;
                            role?: "domicile" | "dominant" | "origin" | null | undefined;
                            startDate?: string | null | undefined;
                        }[] | undefined;
                        city?: {
                            id?: number | null | undefined;
                            name: string;
                        } | null | undefined;
                        country?: {
                            countryCodeChar2?: string | null | undefined;
                            countryCodeChar3?: string | null | undefined;
                            id?: number | null | undefined;
                            name: string;
                            unRegion?: string | null | undefined;
                            unSubregion?: string | null | undefined;
                        } | null | undefined;
                        countryAbbrev?: string | null | undefined;
                        createdAt?: string | null | undefined;
                        fullAddress?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isHq?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        latitude?: number | null | undefined;
                        longitude?: number | null | undefined;
                        postalCode?: string | null | undefined;
                        state?: {
                            id?: number | null | undefined;
                            name: string;
                            stateAbbrev?: string | null | undefined;
                        } | null | undefined;
                        stateAbbrev?: string | null | undefined;
                        street?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                    }[];
                    urlLink: {
                        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                        createdAt?: string | null | undefined;
                        id?: number | null | undefined;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        owner?: {
                            entityId?: string | null | undefined;
                            personId?: string | null | undefined;
                        } | null | undefined;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                        statusChecked?: string | null | undefined;
                        updatedAt?: string | null | undefined;
                        url: string;
                        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                    }[];
                };
                investment: {
                    amount?: number | null | undefined;
                    company: {
                        entity: {
                            createdAt?: string | null | undefined;
                            defaultCurrency?: string | null | undefined;
                            foundedYear?: number | null | undefined;
                            id: string;
                            image: {
                                isMonogram: boolean;
                                logo?: string | null | undefined;
                                logoSquare?: string | null | undefined;
                            };
                            lastModifiedAt?: string | null | undefined;
                            nameAlias: {
                                displayable?: boolean | null | undefined;
                                name: string;
                                type?: "alternativeDba" | "relatedLegal" | null | undefined;
                            }[];
                            nameBrand: string;
                            nameLegal?: string | null | undefined;
                            operatingStatus?: string | null | undefined;
                            publicId?: string | null | undefined;
                            publicUrl?: string | null | undefined;
                            sitemap?: {
                                hasAcquisitions?: boolean | undefined;
                                hasAnalysis: boolean;
                                hasEmployees: boolean;
                                hasFundraising: boolean;
                                hasNews: boolean;
                                productServiceSlug: string[];
                            } | null | undefined;
                            slug: string;
                            source?: {
                                changedAt?: string | null | undefined;
                                dataSourceUpdatedAt?: string | null | undefined;
                                detail?: string | null | undefined;
                                kind?: string | null | undefined;
                                pendingApproval?: number | null | undefined;
                                sourceId?: string | null | undefined;
                                status?: string | null | undefined;
                            } | null | undefined;
                            status?: {
                                isFeatured: boolean;
                                isHidden: boolean;
                                isVerified: boolean;
                                showOnSitemap: boolean;
                            } | undefined;
                            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                            updatedAt?: string | null | undefined;
                        };
                    };
                    date?: string | null | undefined;
                    fundraiseTransaction?: {
                        amountRaised?: number | null | undefined;
                        dateAnnounced?: string | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        investorCount?: number | null | undefined;
                        nameBrand: string;
                        round?: string | null | undefined;
                        status?: string | null | undefined;
                        valuationPostMoney?: number | null | undefined;
                    } | null | undefined;
                    fundraiseTransactionId: string;
                    id: string;
                    investmentDate: string;
                    investorAttribution?: {
                        amountInvested?: number | null | undefined;
                        attributionType: "direct" | "managedFund";
                        beneficialEntityId?: string | null | undefined;
                        fundManagerRelationshipId?: number | null | undefined;
                        joinId: string;
                        leadInvestor: boolean;
                        recordedEntityId?: string | null | undefined;
                        round?: {
                            round: string;
                        } | null | undefined;
                        transactionId: string;
                    } | null | undefined;
                    round?: string | null | undefined;
                }[];
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                pendingApproval?: number | null | undefined;
            }[];
            publicUrl?: string | null | undefined;
            relationship: {
                asOf?: string | null | undefined;
                comparisonSignals?: {
                    fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    ownership: string[];
                    pricingModel: string[];
                    sellsTo: string[];
                    totalRaised?: number | null | undefined;
                    website?: string | null | undefined;
                } | null | undefined;
                createdAt?: string | null | undefined;
                detail?: string | null | undefined;
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                relationship: any[];
                relationshipType: string;
                source?: string | null | undefined;
                sourceEntityId?: string | null | undefined;
                targetEntityId?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
                    accelerator: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
                    asOfDate?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    dataConfidence?: "high" | "low" | "medium" | null | undefined;
                    derivedRange?: {
                        asOfDate: string;
                        bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                        monthsFromNow: number;
                        targetDate: string;
                    } | null | undefined;
                    discreteValue?: number | null | undefined;
                    entityId: string;
                    id: number;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
                snippet: {
                    compliance?: {
                        characterCount: number;
                        meetsRequirements: boolean;
                        violation: string[];
                        wordCount: number;
                    } | null | undefined;
                    createdAt?: string | null | undefined;
                    entityId: string;
                    id: number;
                    isCurrent: boolean;
                    isPrimary: boolean;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    text: string;
                    textType: string;
                    updatedAt?: string | null | undefined;
                    visible: boolean;
                }[];
            };
            sitemap: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            };
            uniqueId: {
                createdAt: string;
                id: number;
                identifier: string;
                idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
                owner: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                };
                source?: string | null | undefined;
                updatedAt: string;
            }[];
        };
        investorAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        round: {
            round: string;
        }[];
        roundCount: number;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityInvestorParticipationDefinition = z.infer<typeof PageEntityInvestorParticipationSchemaDefinition>;
/**
 * @openapiSchema PageEntityInvestorParticipation
 * @endpoint GET /v1/entities/detail/investors
 * @contractShape pagination.page-entity-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityInvestorParticipationSchema: z.ZodType<PageEntityInvestorParticipationDefinition>;
export type PageEntityInvestorParticipation = z.infer<typeof PageEntityInvestorParticipationSchema>;
declare const PageEntityListSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        core: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        core: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityListDefinition = z.infer<typeof PageEntityListSchemaDefinition>;
/**
 * @openapiSchema PageEntityList
 * @endpoint GET /v1/entities
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @contractShape pagination.page-entity-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityListSchema: z.ZodType<PageEntityListDefinition>;
export type PageEntityList = z.infer<typeof PageEntityListSchema>;
declare const PageEntityListSummarySchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityListSummaryDefinition = z.infer<typeof PageEntityListSummarySchemaDefinition>;
/**
 * @openapiSchema PageEntityListSummary
 * @endpoint GET /v1/entities/summary
 * @contractShape pagination.page-entity-list-summary
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityListSummarySchema: z.ZodType<PageEntityListSummaryDefinition>;
export type PageEntityListSummary = z.infer<typeof PageEntityListSummarySchema>;
declare const PageEntityPersonSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodType<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown>>, z.ZodType<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        core: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        pendingApproval?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        core: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        pendingApproval?: number | null | undefined;
    }, unknown>>]>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityPersonDefinition = z.infer<typeof PageEntityPersonSchemaDefinition>;
/**
 * @openapiSchema PageEntityPerson
 * @endpoint GET /v1/entities/{entityId}/people
 * @contractShape pagination.page-entity-person
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityPersonSchema: z.ZodType<PageEntityPersonDefinition>;
export type PageEntityPerson = z.infer<typeof PageEntityPersonSchema>;
declare const PageEntityPersonAssociationSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        associationId: z.ZodInt;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        endDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        entityAddress: z.ZodArray<z.ZodObject<{
            address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            association: z.ZodOptional<z.ZodArray<z.ZodType<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, unknown>>>>;
            city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
            }, z.core.$strip>>>;
            country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        entityId: z.ZodUUID;
        entityIsHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        entityLogo: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        entityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entityOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entityShowOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        entitySlug: z.ZodString;
        entityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        entityUrlLink: z.ZodArray<z.ZodType<{
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            createdAt?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            owner?: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            } | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url: string;
            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
        }, unknown, z.core.$ZodTypeInternals<{
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            createdAt?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            owner?: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            } | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url: string;
            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
        }, unknown>>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        personAddress: z.ZodArray<z.ZodObject<{
            address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            association: z.ZodOptional<z.ZodArray<z.ZodType<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, unknown>>>>;
            city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
            }, z.core.$strip>>>;
            country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
                name: z.ZodString;
                stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>>;
        personId: z.ZodUUID;
        personImage: z.ZodType<{
            isMonogram: boolean;
            picture?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            picture?: string | null | undefined;
        }, unknown>>;
        personName: z.ZodString;
        personSlug: z.ZodString;
        personUrlLink: z.ZodArray<z.ZodType<{
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            createdAt?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            owner?: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            } | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url: string;
            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
        }, unknown, z.core.$ZodTypeInternals<{
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            createdAt?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            owner?: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            } | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            updatedAt?: string | null | undefined;
            url: string;
            urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
        }, unknown>>>;
        score: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        startDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        titleFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        titleId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        titleLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityPersonAssociationDefinition = z.infer<typeof PageEntityPersonAssociationSchemaDefinition>;
/**
 * @openapiSchema PageEntityPersonAssociation
 * @endpoint GET /v1/people/{personId}/entities
 * @contractShape pagination.page-entity-person-association
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityPersonAssociationSchema: z.ZodType<PageEntityPersonAssociationDefinition>;
export type PageEntityPersonAssociation = z.infer<typeof PageEntityPersonAssociationSchema>;
declare const PageEntityRelationshipSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        asOf?: string | null | undefined;
        comparisonSignals?: {
            fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
            ownership: string[];
            pricingModel: string[];
            sellsTo: string[];
            totalRaised?: number | null | undefined;
            website?: string | null | undefined;
        } | null | undefined;
        createdAt?: string | null | undefined;
        detail?: string | null | undefined;
        entity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        relationship: /*elided*/ any[];
        relationshipType: string;
        source?: string | null | undefined;
        sourceEntityId?: string | null | undefined;
        targetEntityId?: string | null | undefined;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        asOf?: string | null | undefined;
        comparisonSignals?: {
            fundingStage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
            ownership: string[];
            pricingModel: string[];
            sellsTo: string[];
            totalRaised?: number | null | undefined;
            website?: string | null | undefined;
        } | null | undefined;
        createdAt?: string | null | undefined;
        detail?: string | null | undefined;
        entity: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        relationship: any[];
        relationshipType: string;
        source?: string | null | undefined;
        sourceEntityId?: string | null | undefined;
        targetEntityId?: string | null | undefined;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityRelationshipDefinition = z.infer<typeof PageEntityRelationshipSchemaDefinition>;
/**
 * @openapiSchema PageEntityRelationship
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @contractShape pagination.page-entity-relationship
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityRelationshipSchema: z.ZodType<PageEntityRelationshipDefinition>;
export type PageEntityRelationship = z.infer<typeof PageEntityRelationshipSchema>;
declare const PageEntityResearchDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        asOfDate?: string | null | undefined;
        createdAt?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        source?: string | null | undefined;
        sourceRecord?: {
            changedAt?: string | null | undefined;
            operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
            provenanceSource?: {
                actorType?: "agent" | "employee" | undefined;
                agentChassis?: string | null | undefined;
                agentModel?: string | null | undefined;
                sourceDetail: string;
                sourceProvider?: string | null | undefined;
                sourceProviderId?: string | null | undefined;
                sourceProviderSlug?: string | null | undefined;
                sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
            } | null | undefined;
            source?: string | null | undefined;
        } | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        createdAt?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        derivedRange?: {
            asOfDate: string;
            bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
            monthsFromNow: number;
            targetDate: string;
        } | null | undefined;
        discreteValue?: number | null | undefined;
        entityId: string;
        id: number;
        source?: string | null | undefined;
        sourceRecord?: {
            changedAt?: string | null | undefined;
            operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
            provenanceSource?: {
                actorType?: "agent" | "employee" | undefined;
                agentChassis?: string | null | undefined;
                agentModel?: string | null | undefined;
                sourceDetail: string;
                sourceProvider?: string | null | undefined;
                sourceProviderId?: string | null | undefined;
                sourceProviderSlug?: string | null | undefined;
                sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
            } | null | undefined;
            source?: string | null | undefined;
        } | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        updatedAt?: string | null | undefined;
        valueResearchDetail?: string | null | undefined;
        valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityResearchDetailDefinition = z.infer<typeof PageEntityResearchDetailSchemaDefinition>;
/**
 * @openapiSchema PageEntityResearchDetail
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @contractShape pagination.page-entity-research-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityResearchDetailSchema: z.ZodType<PageEntityResearchDetailDefinition>;
export type PageEntityResearchDetail = z.infer<typeof PageEntityResearchDetailSchema>;
declare const PageEntityResearchSnippetSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        compliance?: {
            characterCount: number;
            meetsRequirements: boolean;
            violation: string[];
            wordCount: number;
        } | null | undefined;
        createdAt?: string | null | undefined;
        entityId: string;
        id: number;
        isCurrent: boolean;
        isPrimary: boolean;
        source?: string | null | undefined;
        sourceRecord?: {
            changedAt?: string | null | undefined;
            operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
            provenanceSource?: {
                actorType?: "agent" | "employee" | undefined;
                agentChassis?: string | null | undefined;
                agentModel?: string | null | undefined;
                sourceDetail: string;
                sourceProvider?: string | null | undefined;
                sourceProviderId?: string | null | undefined;
                sourceProviderSlug?: string | null | undefined;
                sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
            } | null | undefined;
            source?: string | null | undefined;
        } | null | undefined;
        text: string;
        textType: string;
        updatedAt?: string | null | undefined;
        visible: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        compliance?: {
            characterCount: number;
            meetsRequirements: boolean;
            violation: string[];
            wordCount: number;
        } | null | undefined;
        createdAt?: string | null | undefined;
        entityId: string;
        id: number;
        isCurrent: boolean;
        isPrimary: boolean;
        source?: string | null | undefined;
        sourceRecord?: {
            changedAt?: string | null | undefined;
            operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
            provenanceSource?: {
                actorType?: "agent" | "employee" | undefined;
                agentChassis?: string | null | undefined;
                agentModel?: string | null | undefined;
                sourceDetail: string;
                sourceProvider?: string | null | undefined;
                sourceProviderId?: string | null | undefined;
                sourceProviderSlug?: string | null | undefined;
                sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
            } | null | undefined;
            source?: string | null | undefined;
        } | null | undefined;
        text: string;
        textType: string;
        updatedAt?: string | null | undefined;
        visible: boolean;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityResearchSnippetDefinition = z.infer<typeof PageEntityResearchSnippetSchemaDefinition>;
/**
 * @openapiSchema PageEntityResearchSnippet
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @contractShape pagination.page-entity-research-snippet
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityResearchSnippetSchema: z.ZodType<PageEntityResearchSnippetDefinition>;
export type PageEntityResearchSnippet = z.infer<typeof PageEntityResearchSnippetSchema>;
declare const PageEntitySimilarityResultSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
                    accelerator: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
                    asOfDate?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    dataConfidence?: "high" | "low" | "medium" | null | undefined;
                    derivedRange?: {
                        asOfDate: string;
                        bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                        monthsFromNow: number;
                        targetDate: string;
                    } | null | undefined;
                    discreteValue?: number | null | undefined;
                    entityId: string;
                    id: number;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            curatedAsOf?: string | null | undefined;
            curatedRelationshipType?: string | null | undefined;
            curatedSource?: string | null | undefined;
            derivedFromEntityId?: string | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "computed" | "curated" | "derived" | "precomputed" | "semantic";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            core: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                status?: {
                    isFeatured: boolean;
                    isHidden: boolean;
                    isVerified: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                classification: {
                    geoLocationExposure?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    industry?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    mainProduct?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    standardizedClassification?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        category: string;
                        code?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        entityClassificationId?: number | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        level?: number | null | undefined;
                        name: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    tag?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeCustomer?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeModel?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeOwnership?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeRevenue?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                    typeTechnologyUsed?: ({
                        creatable: boolean;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        writable: boolean;
                    } & {
                        bucket?: string | null | undefined;
                        classificationId?: number | null | undefined;
                        creatable: boolean;
                        createdAt?: string | null | undefined;
                        id: number;
                        isCurrent?: boolean | null | undefined;
                        isPrimary?: boolean | null | undefined;
                        name: string;
                        slug?: string | null | undefined;
                        type: string;
                        updatedAt?: string | null | undefined;
                        writable: boolean;
                    })[] | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            fundraiseRound: {
                amountRaised?: number | null | undefined;
                createdAt?: string | null | undefined;
                currency?: string | null | undefined;
                dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
                dateAnnounced?: string | null | undefined;
                dateFundingComplete?: string | null | undefined;
                dateInvestorExit?: string | null | undefined;
                entity?: {
                    core: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    fundingDetail?: {
                        fundingRoundCount: number;
                        investorCount: number;
                        latestValuation?: number | null | undefined;
                        mostRecentAmount?: number | null | undefined;
                        mostRecentDate?: string | null | undefined;
                        stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                        totalRaised: number;
                    } | null | undefined;
                } | null | undefined;
                id: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                investorCount?: number | null | undefined;
                round?: string | null | undefined;
                sourceAttribution: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                }[];
                updatedAt?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
                valuationPreMoney?: number | null | undefined;
            }[];
            research: {
                acceleratorParticipation: {
                    accelerator: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                    acceleratorName: string;
                    asOfDate: string;
                    batch?: string | null | undefined;
                    id: string;
                    program?: string | null | undefined;
                    status?: string | null | undefined;
                }[];
                detail: {
                    asOfDate?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    creator?: string | null | undefined;
                    dataConfidence?: "high" | "low" | "medium" | null | undefined;
                    derivedRange?: {
                        asOfDate: string;
                        bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                        monthsFromNow: number;
                        targetDate: string;
                    } | null | undefined;
                    discreteValue?: number | null | undefined;
                    entityId: string;
                    id: number;
                    source?: string | null | undefined;
                    sourceRecord?: {
                        changedAt?: string | null | undefined;
                        operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                        provenanceSource?: {
                            actorType?: "agent" | "employee" | undefined;
                            agentChassis?: string | null | undefined;
                            agentModel?: string | null | undefined;
                            sourceDetail: string;
                            sourceProvider?: string | null | undefined;
                            sourceProviderId?: string | null | undefined;
                            sourceProviderSlug?: string | null | undefined;
                            sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                        } | null | undefined;
                        source?: string | null | undefined;
                    } | null | undefined;
                    textValue?: string | null | undefined;
                    typeResearchDetail: string;
                    updatedAt?: string | null | undefined;
                    valueResearchDetail?: string | null | undefined;
                    valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
                }[];
            };
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            curatedAsOf?: string | null | undefined;
            curatedRelationshipType?: string | null | undefined;
            curatedSource?: string | null | undefined;
            derivedFromEntityId?: string | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "computed" | "curated" | "derived" | "precomputed" | "semantic";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntitySimilarityResultDefinition = z.infer<typeof PageEntitySimilarityResultSchemaDefinition>;
/**
 * @openapiSchema PageEntitySimilarityResult
 * @endpoint GET /v1/entities/detail/similar
 * @contractShape pagination.page-entity-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntitySimilarityResultSchema: z.ZodType<PageEntitySimilarityResultDefinition>;
export type PageEntitySimilarityResult = z.infer<typeof PageEntitySimilarityResultSchema>;
declare const PageEntitySitemapUrlSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        entityId: string;
        lastUpdatedAt: string;
        path: string;
        productServiceSlug?: string | null | undefined;
        slotKey: string;
        slug: string;
        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
        urlType: "acquisitions" | "analysis" | "employees" | "fundraising" | "news" | "overview" | "productService";
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        lastUpdatedAt: string;
        path: string;
        productServiceSlug?: string | null | undefined;
        slotKey: string;
        slug: string;
        typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
        urlType: "acquisitions" | "analysis" | "employees" | "fundraising" | "news" | "overview" | "productService";
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntitySitemapUrlDefinition = z.infer<typeof PageEntitySitemapUrlSchemaDefinition>;
/**
 * @openapiSchema PageEntitySitemapUrl
 * @endpoint GET /v1/entities/sitemap-urls
 * @contractShape pagination.page-entity-sitemap-url
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntitySitemapUrlSchema: z.ZodType<PageEntitySitemapUrlDefinition>;
export type PageEntitySitemapUrl = z.infer<typeof PageEntitySitemapUrlSchema>;
declare const PageEntityTagSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        bucket?: string | null | undefined;
        classificationId?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        slug?: string | null | undefined;
        type: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        bucket?: string | null | undefined;
        classificationId?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        slug?: string | null | undefined;
        type: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityTagDefinition = z.infer<typeof PageEntityTagSchemaDefinition>;
/**
 * @openapiSchema PageEntityTag
 * @endpoint GET /v1/classifications/tags
 * @contractShape pagination.page-entity-tag
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityTagSchema: z.ZodType<PageEntityTagDefinition>;
export type PageEntityTag = z.infer<typeof PageEntityTagSchema>;
declare const PageEntityTextSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        compliance?: {
            characterCount: number;
            meetsRequirements: boolean;
            violation: string[];
            wordCount: number;
        } | null | undefined;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        language?: string | null | undefined;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        text: string;
        textName?: string | null | undefined;
        textType: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        compliance?: {
            characterCount: number;
            meetsRequirements: boolean;
            violation: string[];
            wordCount: number;
        } | null | undefined;
        createdAt?: string | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        language?: string | null | undefined;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        text: string;
        textName?: string | null | undefined;
        textType: string;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityTextDefinition = z.infer<typeof PageEntityTextSchemaDefinition>;
/**
 * @openapiSchema PageEntityText
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/people/{personId}/texts
 * @contractShape pagination.page-entity-text
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityTextSchema: z.ZodType<PageEntityTextDefinition>;
export type PageEntityText = z.infer<typeof PageEntityTextSchema>;
declare const PageEntityUrlLinkSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown, z.core.$ZodTypeInternals<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityUrlLinkDefinition = z.infer<typeof PageEntityUrlLinkSchemaDefinition>;
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
export declare const PageEntityUrlLinkSchema: z.ZodType<PageEntityUrlLinkDefinition>;
export type PageEntityUrlLink = z.infer<typeof PageEntityUrlLinkSchema>;
declare const PageEntityValuationTimeSeriesPointSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        amountRaised?: number | null | undefined;
        asOfDate: string;
        confidence: "high" | "low" | "medium";
        currency: string;
        declaredBasis: "postMoney" | "preMoney" | "reported";
        derivation: "derivedFromPostMinusRaised" | "derivedFromPreAndRaised" | "reportedAssumedPost" | "stored";
        detailId?: number | null | undefined;
        label?: string | null | undefined;
        source: "fundraiseRound" | "researchDetail";
        sourceRef: string;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        amountRaised?: number | null | undefined;
        asOfDate: string;
        confidence: "high" | "low" | "medium";
        currency: string;
        declaredBasis: "postMoney" | "preMoney" | "reported";
        derivation: "derivedFromPostMinusRaised" | "derivedFromPreAndRaised" | "reportedAssumedPost" | "stored";
        detailId?: number | null | undefined;
        label?: string | null | undefined;
        source: "fundraiseRound" | "researchDetail";
        sourceRef: string;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageEntityValuationTimeSeriesPointDefinition = z.infer<typeof PageEntityValuationTimeSeriesPointSchemaDefinition>;
/**
 * @openapiSchema PageEntityValuationTimeSeriesPoint
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @contractShape pagination.page-entity-valuation-time-series-point
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageEntityValuationTimeSeriesPointSchema: z.ZodType<PageEntityValuationTimeSeriesPointDefinition>;
export type PageEntityValuationTimeSeriesPoint = z.infer<typeof PageEntityValuationTimeSeriesPointSchema>;
declare const PageExternalSocialPostSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodISODateTime;
        id: z.ZodUUID;
        isCurrent: z.ZodBoolean;
        lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        mentionedEntityId: z.ZodArray<z.ZodUUID>;
        mentionedPersonId: z.ZodArray<z.ZodUUID>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        }, z.core.$strip>>>;
        permalink: z.ZodType<{
            externalPostId?: string | null | undefined;
            platform: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter";
            url: string;
        }, unknown, z.core.$ZodTypeInternals<{
            externalPostId?: string | null | undefined;
            platform: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter";
            url: string;
        }, unknown>>;
        publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summaryGeneratedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodISODateTime;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageExternalSocialPostDefinition = z.infer<typeof PageExternalSocialPostSchemaDefinition>;
/**
 * @openapiSchema PageExternalSocialPost
 * @endpoint GET /v1/research/external-social-posts
 * @contractShape pagination.page-external-social-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageExternalSocialPostSchema: z.ZodType<PageExternalSocialPostDefinition>;
export type PageExternalSocialPost = z.infer<typeof PageExternalSocialPostSchema>;
declare const PageGithubRepoSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        description?: string | null | undefined;
        forkCount: number;
        githubId: number;
        homepageUrl?: string | null | undefined;
        id: number;
        isArchived: boolean;
        isFork: boolean;
        language?: string | null | undefined;
        license?: string | null | undefined;
        name: string;
        ownerLogin: string;
        repoCreatedAt?: string | null | undefined;
        repoPushedAt?: string | null | undefined;
        stargazerCount: number;
        topic: string[];
        updatedAt?: string | null | undefined;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        description?: string | null | undefined;
        forkCount: number;
        githubId: number;
        homepageUrl?: string | null | undefined;
        id: number;
        isArchived: boolean;
        isFork: boolean;
        language?: string | null | undefined;
        license?: string | null | undefined;
        name: string;
        ownerLogin: string;
        repoCreatedAt?: string | null | undefined;
        repoPushedAt?: string | null | undefined;
        stargazerCount: number;
        topic: string[];
        updatedAt?: string | null | undefined;
        url: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageGithubRepoDefinition = z.infer<typeof PageGithubRepoSchemaDefinition>;
/**
 * @openapiSchema PageGithubRepo
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/people/{personId}/repositories
 * @contractShape pagination.page-github-repo
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageGithubRepoSchema: z.ZodType<PageGithubRepoDefinition>;
export type PageGithubRepo = z.infer<typeof PageGithubRepoSchema>;
declare const PageHarnessRunSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageHarnessRunDefinition = z.infer<typeof PageHarnessRunSchemaDefinition>;
/**
 * @openapiSchema PageHarnessRun
 * @endpoint GET /v1/harness/control-plane/runs
 * @contractShape pagination.page-harness-run
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageHarnessRunSchema: z.ZodType<PageHarnessRunDefinition>;
export type PageHarnessRun = z.infer<typeof PageHarnessRunSchema>;
declare const PageJobSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        failureReason?: string | null | undefined;
        jobId: string;
        jobName: string;
        jobType: string;
        state: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        failureReason?: string | null | undefined;
        jobId: string;
        jobName: string;
        jobType: string;
        state: string;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageJobDefinition = z.infer<typeof PageJobSchemaDefinition>;
/**
 * @openapiSchema PageJob
 * @endpoint GET /v1/jobs/runs
 * @contractShape pagination.page-job
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageJobSchema: z.ZodType<PageJobDefinition>;
export type PageJob = z.infer<typeof PageJobSchema>;
declare const PageLocationDirectoryEntrySchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        canonicalSlug: z.ZodString;
        entityCount: z.ZodNumber;
        identifier: z.ZodType<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown>>;
        latestUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        name: z.ZodString;
        parentLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodString;
    }, z.core.$strip>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageLocationDirectoryEntryDefinition = z.infer<typeof PageLocationDirectoryEntrySchemaDefinition>;
/**
 * @openapiSchema PageLocationDirectoryEntry
 * @endpoint GET /v1/addresses/locations/{scope}
 * @contractShape pagination.page-location-directory-entry
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageLocationDirectoryEntrySchema: z.ZodType<PageLocationDirectoryEntryDefinition>;
export type PageLocationDirectoryEntry = z.infer<typeof PageLocationDirectoryEntrySchema>;
declare const PageMediaCrawlScreenshotSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        contentType: string;
        crawledAt: string;
        createdAt: string;
        fileSize?: number | null | undefined;
        id: number;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        position: number;
        s3Key: string;
        updatedAt: string;
        url: string;
        urlId?: number | null | undefined;
        viewportHeight?: number | null | undefined;
        viewportWidth?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        contentType: string;
        crawledAt: string;
        createdAt: string;
        fileSize?: number | null | undefined;
        id: number;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        position: number;
        s3Key: string;
        updatedAt: string;
        url: string;
        urlId?: number | null | undefined;
        viewportHeight?: number | null | undefined;
        viewportWidth?: number | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageMediaCrawlScreenshotDefinition = z.infer<typeof PageMediaCrawlScreenshotSchemaDefinition>;
/**
 * @openapiSchema PageMediaCrawlScreenshot
 * @endpoint GET /v1/media/screenshots
 * @contractShape pagination.page-media-crawl-screenshot
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageMediaCrawlScreenshotSchema: z.ZodType<PageMediaCrawlScreenshotDefinition>;
export type PageMediaCrawlScreenshot = z.infer<typeof PageMediaCrawlScreenshotSchema>;
declare const PageMediaLogoAuditJobSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        checked: number;
        createdAt: string;
        deleted: number;
        deleteMode: string;
        dryRun: boolean;
        errors: number;
        failureReason?: string | null | undefined;
        id: string;
        rejected: number;
        rejectMonogram: boolean;
        state: "CANCELED" | "COMPLETED" | "FAILED" | "PENDING" | "RUNNING" | "UNKNOWN";
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        checked: number;
        createdAt: string;
        deleted: number;
        deleteMode: string;
        dryRun: boolean;
        errors: number;
        failureReason?: string | null | undefined;
        id: string;
        rejected: number;
        rejectMonogram: boolean;
        state: "CANCELED" | "COMPLETED" | "FAILED" | "PENDING" | "RUNNING" | "UNKNOWN";
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageMediaLogoAuditJobDefinition = z.infer<typeof PageMediaLogoAuditJobSchemaDefinition>;
/**
 * @openapiSchema PageMediaLogoAuditJob
 * @endpoint GET /v1/media/logo-audit/jobs
 * @contractShape pagination.page-media-logo-audit-job
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageMediaLogoAuditJobSchema: z.ZodType<PageMediaLogoAuditJobDefinition>;
export type PageMediaLogoAuditJob = z.infer<typeof PageMediaLogoAuditJobSchema>;
declare const PageNewsSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        pendingApproval?: number | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        pendingApproval?: number | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageNewsDefinition = z.infer<typeof PageNewsSchemaDefinition>;
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
export declare const PageNewsSchema: z.ZodType<PageNewsDefinition>;
export type PageNews = z.infer<typeof PageNewsSchema>;
declare const PageNewsCandidateScoreSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageNewsCandidateScoreDefinition = z.infer<typeof PageNewsCandidateScoreSchemaDefinition>;
/**
 * @openapiSchema PageNewsCandidateScore
 * @endpoint GET /v1/news/duplicate-check/candidates
 * @endpoint POST /v1/news/duplicate-check/candidates
 * @contractShape pagination.page-news-candidate-score
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageNewsCandidateScoreSchema: z.ZodType<PageNewsCandidateScoreDefinition>;
export type PageNewsCandidateScore = z.infer<typeof PageNewsCandidateScoreSchema>;
declare const PageNewsDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        content?: string | null | undefined;
        core: {
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        };
        entityMentionResolved: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchScore?: number | null | undefined;
            matchType?: string | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        }[];
        externalId?: string | null | undefined;
        linkedContent?: string | null | undefined;
        personMentionResolved: {
            createdAt: string;
            href?: string | null | undefined;
            matchScore?: number | null | undefined;
            matchType?: string | null | undefined;
            mention?: string | null | undefined;
            personId: string;
            slug?: string | null | undefined;
            updatedAt: string;
        }[];
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        content?: string | null | undefined;
        core: {
            author?: string | null | undefined;
            category?: string | null | undefined;
            createdAt?: string | null | undefined;
            excerpt?: string | null | undefined;
            externalNewsArticle?: boolean | null | undefined;
            id: number;
            newsImageThumbnail?: string | null | undefined;
            newsUrlOriginal?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            publication?: string | null | undefined;
            publishedAt?: string | null | undefined;
            slug?: string | null | undefined;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | undefined;
            title: string;
            updatedAt?: string | null | undefined;
        };
        entityMentionResolved: {
            createdAt: string;
            entityId: string;
            href?: string | null | undefined;
            internal: boolean;
            matchScore?: number | null | undefined;
            matchType?: string | null | undefined;
            mention?: string | null | undefined;
            slug?: string | null | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt: string;
        }[];
        externalId?: string | null | undefined;
        linkedContent?: string | null | undefined;
        personMentionResolved: {
            createdAt: string;
            href?: string | null | undefined;
            matchScore?: number | null | undefined;
            matchType?: string | null | undefined;
            mention?: string | null | undefined;
            personId: string;
            slug?: string | null | undefined;
            updatedAt: string;
        }[];
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageNewsDetailDefinition = z.infer<typeof PageNewsDetailSchemaDefinition>;
/**
 * @openapiSchema PageNewsDetail
 * @endpoint GET /v1/news/duplicate-check
 * @endpoint POST /v1/news/duplicate-check
 * @contractShape pagination.page-news-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageNewsDetailSchema: z.ZodType<PageNewsDetailDefinition>;
export type PageNewsDetail = z.infer<typeof PageNewsDetailSchema>;
declare const PageNewsLinkerCandidateSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        content?: string | null | undefined;
        entityMatchType: string[];
        excerpt?: string | null | undefined;
        externalId?: string | null | undefined;
        id: number;
        linkerSentinelPresent: boolean;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        personMatchType: string[];
        publishedDate: string;
        slug?: string | null | undefined;
        source: string;
        title: string;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        content?: string | null | undefined;
        entityMatchType: string[];
        excerpt?: string | null | undefined;
        externalId?: string | null | undefined;
        id: number;
        linkerSentinelPresent: boolean;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        personMatchType: string[];
        publishedDate: string;
        slug?: string | null | undefined;
        source: string;
        title: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageNewsLinkerCandidateDefinition = z.infer<typeof PageNewsLinkerCandidateSchemaDefinition>;
/**
 * @openapiSchema PageNewsLinkerCandidate
 * @endpoint GET /v1/news/linker/candidates
 * @contractShape pagination.page-news-linker-candidate
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageNewsLinkerCandidateSchema: z.ZodType<PageNewsLinkerCandidateDefinition>;
export type PageNewsLinkerCandidate = z.infer<typeof PageNewsLinkerCandidateSchema>;
declare const PagePersonSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PagePersonDefinition = z.infer<typeof PagePersonSchemaDefinition>;
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
export declare const PagePersonSchema: z.ZodType<PagePersonDefinition>;
export type PagePerson = z.infer<typeof PagePersonSchema>;
declare const PagePersonDetailSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        core: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        pendingApproval?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        articleCount?: number | null | undefined;
        association: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        core: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        investment: {
            amount?: number | null | undefined;
            company: {
                entity: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
            };
            date?: string | null | undefined;
            fundraiseTransaction?: {
                amountRaised?: number | null | undefined;
                dateAnnounced?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                investorCount?: number | null | undefined;
                nameBrand: string;
                round?: string | null | undefined;
                status?: string | null | undefined;
                valuationPostMoney?: number | null | undefined;
            } | null | undefined;
            fundraiseTransactionId: string;
            id: string;
            investmentDate: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            round?: string | null | undefined;
        }[];
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        pendingApproval?: number | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PagePersonDetailDefinition = z.infer<typeof PagePersonDetailSchemaDefinition>;
/**
 * @openapiSchema PagePersonDetail
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @contractShape pagination.page-person-detail
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PagePersonDetailSchema: z.ZodType<PagePersonDetailDefinition>;
export type PagePersonDetail = z.infer<typeof PagePersonDetailSchema>;
declare const PagePersonInvestorParticipationSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        investorAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        person: {
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                endDate?: string | null | undefined;
                entityAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                entityId: string;
                entityIsHidden?: boolean | null | undefined;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entityShowOnSitemap?: boolean | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                isCurrent?: boolean | null | undefined;
                personAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            core: {
                createdAt?: string | null | undefined;
                gender?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                nameFirst?: string | null | undefined;
                nameFull: string;
                nameLast?: string | null | undefined;
                nameMiddle?: string | null | undefined;
                nickname?: string | null | undefined;
                publicId?: string | null | undefined;
                semanticMatch?: {
                    computedAt: string;
                    cosineDistance: number;
                    cosineScore: number;
                    modelVersion: string;
                    rank: number;
                    sourceHash: string;
                    sourceId: string;
                    sourceJson: string;
                    sourceText: string;
                    sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                } | null | undefined;
                slug: string;
                source: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                };
                status?: {
                    isHidden: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                suffix?: string | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            pendingApproval?: number | null | undefined;
        };
        round: {
            round: string;
        }[];
        roundCount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        investorAttribution: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        }[];
        person: {
            articleCount?: number | null | undefined;
            association: {
                associationId: number;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                endDate?: string | null | undefined;
                entityAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                entityId: string;
                entityIsHidden?: boolean | null | undefined;
                entityLogo: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                entityName?: string | null | undefined;
                entityOperatingStatus?: string | null | undefined;
                entityShowOnSitemap?: boolean | null | undefined;
                entitySlug: string;
                entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                entityUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                isCurrent?: boolean | null | undefined;
                personAddress: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                personId: string;
                personImage: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                personName: string;
                personSlug: string;
                personUrlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
                score?: number | null | undefined;
                startDate?: string | null | undefined;
                titleFunction?: string | null | undefined;
                titleId?: number | null | undefined;
                titleLevel?: string | null | undefined;
                titleName?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            core: {
                createdAt?: string | null | undefined;
                gender?: string | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    picture?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
                }[];
                nameFirst?: string | null | undefined;
                nameFull: string;
                nameLast?: string | null | undefined;
                nameMiddle?: string | null | undefined;
                nickname?: string | null | undefined;
                publicId?: string | null | undefined;
                semanticMatch?: {
                    computedAt: string;
                    cosineDistance: number;
                    cosineScore: number;
                    modelVersion: string;
                    rank: number;
                    sourceHash: string;
                    sourceId: string;
                    sourceJson: string;
                    sourceText: string;
                    sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
                } | null | undefined;
                slug: string;
                source: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                };
                status?: {
                    isHidden: boolean;
                    showOnSitemap: boolean;
                } | undefined;
                suffix?: string | null | undefined;
                text: {
                    expanded?: string | null | undefined;
                    generatedDescription?: string | null | undefined;
                    short?: string | null | undefined;
                };
                updatedAt?: string | null | undefined;
            };
            enrichment: {
                address: {
                    address?: number | null | undefined;
                    addressLine1?: string | null | undefined;
                    addressLine2?: string | null | undefined;
                    association?: {
                        endDate?: string | null | undefined;
                        id: number;
                        isCurrent: boolean;
                        role?: "domicile" | "dominant" | "origin" | null | undefined;
                        startDate?: string | null | undefined;
                    }[] | undefined;
                    city?: {
                        id?: number | null | undefined;
                        name: string;
                    } | null | undefined;
                    country?: {
                        countryCodeChar2?: string | null | undefined;
                        countryCodeChar3?: string | null | undefined;
                        id?: number | null | undefined;
                        name: string;
                        unRegion?: string | null | undefined;
                        unSubregion?: string | null | undefined;
                    } | null | undefined;
                    countryAbbrev?: string | null | undefined;
                    createdAt?: string | null | undefined;
                    fullAddress?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isHq?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    latitude?: number | null | undefined;
                    longitude?: number | null | undefined;
                    postalCode?: string | null | undefined;
                    state?: {
                        id?: number | null | undefined;
                        name: string;
                        stateAbbrev?: string | null | undefined;
                    } | null | undefined;
                    stateAbbrev?: string | null | undefined;
                    street?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                }[];
                urlLink: {
                    crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                    crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                    createdAt?: string | null | undefined;
                    id?: number | null | undefined;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    owner?: {
                        entityId?: string | null | undefined;
                        personId?: string | null | undefined;
                    } | null | undefined;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                    statusChecked?: string | null | undefined;
                    updatedAt?: string | null | undefined;
                    url: string;
                    urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
                }[];
            };
            investment: {
                amount?: number | null | undefined;
                company: {
                    entity: {
                        createdAt?: string | null | undefined;
                        defaultCurrency?: string | null | undefined;
                        foundedYear?: number | null | undefined;
                        id: string;
                        image: {
                            isMonogram: boolean;
                            logo?: string | null | undefined;
                            logoSquare?: string | null | undefined;
                        };
                        lastModifiedAt?: string | null | undefined;
                        nameAlias: {
                            displayable?: boolean | null | undefined;
                            name: string;
                            type?: "alternativeDba" | "relatedLegal" | null | undefined;
                        }[];
                        nameBrand: string;
                        nameLegal?: string | null | undefined;
                        operatingStatus?: string | null | undefined;
                        publicId?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        sitemap?: {
                            hasAcquisitions?: boolean | undefined;
                            hasAnalysis: boolean;
                            hasEmployees: boolean;
                            hasFundraising: boolean;
                            hasNews: boolean;
                            productServiceSlug: string[];
                        } | null | undefined;
                        slug: string;
                        source?: {
                            changedAt?: string | null | undefined;
                            dataSourceUpdatedAt?: string | null | undefined;
                            detail?: string | null | undefined;
                            kind?: string | null | undefined;
                            pendingApproval?: number | null | undefined;
                            sourceId?: string | null | undefined;
                            status?: string | null | undefined;
                        } | null | undefined;
                        status?: {
                            isFeatured: boolean;
                            isHidden: boolean;
                            isVerified: boolean;
                            showOnSitemap: boolean;
                        } | undefined;
                        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                        updatedAt?: string | null | undefined;
                    };
                };
                date?: string | null | undefined;
                fundraiseTransaction?: {
                    amountRaised?: number | null | undefined;
                    dateAnnounced?: string | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    investorCount?: number | null | undefined;
                    nameBrand: string;
                    round?: string | null | undefined;
                    status?: string | null | undefined;
                    valuationPostMoney?: number | null | undefined;
                } | null | undefined;
                fundraiseTransactionId: string;
                id: string;
                investmentDate: string;
                investorAttribution?: {
                    amountInvested?: number | null | undefined;
                    attributionType: "direct" | "managedFund";
                    beneficialEntityId?: string | null | undefined;
                    fundManagerRelationshipId?: number | null | undefined;
                    joinId: string;
                    leadInvestor: boolean;
                    recordedEntityId?: string | null | undefined;
                    round?: {
                        round: string;
                    } | null | undefined;
                    transactionId: string;
                } | null | undefined;
                round?: string | null | undefined;
            }[];
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            pendingApproval?: number | null | undefined;
        };
        round: {
            round: string;
        }[];
        roundCount: number;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PagePersonInvestorParticipationDefinition = z.infer<typeof PagePersonInvestorParticipationSchemaDefinition>;
/**
 * @openapiSchema PagePersonInvestorParticipation
 * @endpoint GET /v1/entities/detail/person-investors
 * @contractShape pagination.page-person-investor-participation
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PagePersonInvestorParticipationSchema: z.ZodType<PagePersonInvestorParticipationDefinition>;
export type PagePersonInvestorParticipation = z.infer<typeof PagePersonInvestorParticipationSchema>;
declare const PagePersonSimilarityResultSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        currentRole?: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        person: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "live" | "precomputed";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        currentRole?: {
            associationId: number;
            createdAt?: string | null | undefined;
            creator?: string | null | undefined;
            endDate?: string | null | undefined;
            entityAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            entityId: string;
            entityIsHidden?: boolean | null | undefined;
            entityLogo: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            entityName?: string | null | undefined;
            entityOperatingStatus?: string | null | undefined;
            entityShowOnSitemap?: boolean | null | undefined;
            entitySlug: string;
            entityType?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            entityUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            isCurrent?: boolean | null | undefined;
            personAddress: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            personId: string;
            personImage: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            personName: string;
            personSlug: string;
            personUrlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
            score?: number | null | undefined;
            startDate?: string | null | undefined;
            titleFunction?: string | null | undefined;
            titleId?: number | null | undefined;
            titleLevel?: string | null | undefined;
            titleName?: string | null | undefined;
            updatedAt?: string | null | undefined;
        } | null | undefined;
        person: {
            createdAt?: string | null | undefined;
            gender?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                picture?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
            }[];
            nameFirst?: string | null | undefined;
            nameFull: string;
            nameLast?: string | null | undefined;
            nameMiddle?: string | null | undefined;
            nickname?: string | null | undefined;
            publicId?: string | null | undefined;
            semanticMatch?: {
                computedAt: string;
                cosineDistance: number;
                cosineScore: number;
                modelVersion: string;
                rank: number;
                sourceHash: string;
                sourceId: string;
                sourceJson: string;
                sourceText: string;
                sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
            } | null | undefined;
            slug: string;
            source: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            };
            status?: {
                isHidden: boolean;
                showOnSitemap: boolean;
            } | undefined;
            suffix?: string | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            updatedAt?: string | null | undefined;
        };
        similarity: {
            compositeScore?: number | null | undefined;
            cosineScore?: number | null | undefined;
            matchedSectionWeight?: number | null | undefined;
            origin: "live" | "precomputed";
            rank: number;
            sharedSectionCount?: number | null | undefined;
        };
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PagePersonSimilarityResultDefinition = z.infer<typeof PagePersonSimilarityResultSchemaDefinition>;
/**
 * @openapiSchema PagePersonSimilarityResult
 * @endpoint GET /v1/people/detail/similar
 * @contractShape pagination.page-person-similarity-result
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PagePersonSimilarityResultSchema: z.ZodType<PagePersonSimilarityResultDefinition>;
export type PagePersonSimilarityResult = z.infer<typeof PagePersonSimilarityResultSchema>;
declare const PageResultContentSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        canonicalUrl?: string | null | undefined;
        contentId: string;
        contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
        createdAt?: string | null | undefined;
        publishedAt?: string | null | undefined;
        relation?: "about" | "by" | null | undefined;
        sourceDomain?: string | null | undefined;
        sourceName?: string | null | undefined;
        summary?: string | null | undefined;
        title: string;
        topic?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        canonicalUrl?: string | null | undefined;
        contentId: string;
        contentType: "blogPost" | "externalSocialPost" | "newsArticle" | "repository" | "repositoryOwner" | "researchPaper" | "webPage" | "webSite";
        createdAt?: string | null | undefined;
        publishedAt?: string | null | undefined;
        relation?: "about" | "by" | null | undefined;
        sourceDomain?: string | null | undefined;
        sourceName?: string | null | undefined;
        summary?: string | null | undefined;
        title: string;
        topic?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url?: string | null | undefined;
        year?: number | null | undefined;
    }, unknown>>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
type PageResultContentDefinition = z.infer<typeof PageResultContentSchemaDefinition>;
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
export declare const PageResultContentSchema: z.ZodType<PageResultContentDefinition>;
export type PageResultContent = z.infer<typeof PageResultContentSchema>;
declare const PageResultEntityListSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        core: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        core: {
            createdAt?: string | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            lastModifiedAt?: string | null | undefined;
            nameAlias: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[];
            nameBrand: string;
            nameLegal?: string | null | undefined;
            operatingStatus?: string | null | undefined;
            publicId?: string | null | undefined;
            publicUrl?: string | null | undefined;
            sitemap?: {
                hasAcquisitions?: boolean | undefined;
                hasAnalysis: boolean;
                hasEmployees: boolean;
                hasFundraising: boolean;
                hasNews: boolean;
                productServiceSlug: string[];
            } | null | undefined;
            slug: string;
            source?: {
                changedAt?: string | null | undefined;
                dataSourceUpdatedAt?: string | null | undefined;
                detail?: string | null | undefined;
                kind?: string | null | undefined;
                pendingApproval?: number | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            status?: {
                isFeatured: boolean;
                isHidden: boolean;
                isVerified: boolean;
                showOnSitemap: boolean;
            } | undefined;
            typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
            updatedAt?: string | null | undefined;
        };
        enrichment: {
            address: {
                address?: number | null | undefined;
                addressLine1?: string | null | undefined;
                addressLine2?: string | null | undefined;
                association?: {
                    endDate?: string | null | undefined;
                    id: number;
                    isCurrent: boolean;
                    role?: "domicile" | "dominant" | "origin" | null | undefined;
                    startDate?: string | null | undefined;
                }[] | undefined;
                city?: {
                    id?: number | null | undefined;
                    name: string;
                } | null | undefined;
                country?: {
                    countryCodeChar2?: string | null | undefined;
                    countryCodeChar3?: string | null | undefined;
                    id?: number | null | undefined;
                    name: string;
                    unRegion?: string | null | undefined;
                    unSubregion?: string | null | undefined;
                } | null | undefined;
                countryAbbrev?: string | null | undefined;
                createdAt?: string | null | undefined;
                fullAddress?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isHq?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                latitude?: number | null | undefined;
                longitude?: number | null | undefined;
                postalCode?: string | null | undefined;
                state?: {
                    id?: number | null | undefined;
                    name: string;
                    stateAbbrev?: string | null | undefined;
                } | null | undefined;
                stateAbbrev?: string | null | undefined;
                street?: string | null | undefined;
                updatedAt?: string | null | undefined;
            }[];
            classification: {
                geoLocationExposure?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                industry?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                mainProduct?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                standardizedClassification?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    category: string;
                    code?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    entityClassificationId?: number | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    level?: number | null | undefined;
                    name: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                tag?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeCustomer?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeModel?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeOwnership?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeRevenue?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
                typeTechnologyUsed?: ({
                    creatable: boolean;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    writable: boolean;
                } & {
                    bucket?: string | null | undefined;
                    classificationId?: number | null | undefined;
                    creatable: boolean;
                    createdAt?: string | null | undefined;
                    id: number;
                    isCurrent?: boolean | null | undefined;
                    isPrimary?: boolean | null | undefined;
                    name: string;
                    slug?: string | null | undefined;
                    type: string;
                    updatedAt?: string | null | undefined;
                    writable: boolean;
                })[] | undefined;
            };
            fundingDetail?: {
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                totalRaised: number;
            } | null | undefined;
            text: {
                expanded?: string | null | undefined;
                generatedDescription?: string | null | undefined;
                short?: string | null | undefined;
            };
            urlLink: {
                crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
                crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
                createdAt?: string | null | undefined;
                id?: number | null | undefined;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                owner?: {
                    entityId?: string | null | undefined;
                    personId?: string | null | undefined;
                } | null | undefined;
                source?: {
                    changedAt?: string | null | undefined;
                    dataSourceUpdatedAt?: string | null | undefined;
                    detail?: string | null | undefined;
                    kind?: string | null | undefined;
                    pendingApproval?: number | null | undefined;
                    sourceId?: string | null | undefined;
                    status?: string | null | undefined;
                } | null | undefined;
                sourceId?: string | null | undefined;
                status?: string | null | undefined;
                statusChecked?: string | null | undefined;
                updatedAt?: string | null | undefined;
                url: string;
                urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
            }[];
        };
        fundraiseRound: {
            amountRaised?: number | null | undefined;
            createdAt?: string | null | undefined;
            currency?: string | null | undefined;
            dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
            dateAnnounced?: string | null | undefined;
            dateFundingComplete?: string | null | undefined;
            dateInvestorExit?: string | null | undefined;
            entity?: {
                core: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                fundingDetail?: {
                    fundingRoundCount: number;
                    investorCount: number;
                    latestValuation?: number | null | undefined;
                    mostRecentAmount?: number | null | undefined;
                    mostRecentDate?: string | null | undefined;
                    stage?: "Acquired" | "Acquired Subsidiary" | "Angel" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Pre-Seed" | "Public" | "Seed" | "Series A" | "Series B" | "Series C" | "Series D" | "Series E" | "Series F" | "Series G" | "Series H" | "Series I" | "Series J" | "Series K" | "Series L" | "Series M" | "Series N" | "Series O" | "Series P" | "Series Q" | "Series R" | "Series S" | "Series T" | "Series U" | "Series V" | "Series W" | "Series X" | "Series Y" | "Series Z" | null | undefined;
                    totalRaised: number;
                } | null | undefined;
            } | null | undefined;
            id: string;
            investorAttribution?: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            } | null | undefined;
            investorCount?: number | null | undefined;
            round?: string | null | undefined;
            sourceAttribution: {
                amountInvested?: number | null | undefined;
                attributionType: "direct" | "managedFund";
                beneficialEntityId?: string | null | undefined;
                fundManagerRelationshipId?: number | null | undefined;
                joinId: string;
                leadInvestor: boolean;
                recordedEntityId?: string | null | undefined;
                round?: {
                    round: string;
                } | null | undefined;
                transactionId: string;
            }[];
            updatedAt?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
            valuationPreMoney?: number | null | undefined;
        }[];
        research: {
            acceleratorParticipation: {
                accelerator: {
                    createdAt?: string | null | undefined;
                    defaultCurrency?: string | null | undefined;
                    foundedYear?: number | null | undefined;
                    id: string;
                    image: {
                        isMonogram: boolean;
                        logo?: string | null | undefined;
                        logoSquare?: string | null | undefined;
                    };
                    lastModifiedAt?: string | null | undefined;
                    nameAlias: {
                        displayable?: boolean | null | undefined;
                        name: string;
                        type?: "alternativeDba" | "relatedLegal" | null | undefined;
                    }[];
                    nameBrand: string;
                    nameLegal?: string | null | undefined;
                    operatingStatus?: string | null | undefined;
                    publicId?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    sitemap?: {
                        hasAcquisitions?: boolean | undefined;
                        hasAnalysis: boolean;
                        hasEmployees: boolean;
                        hasFundraising: boolean;
                        hasNews: boolean;
                        productServiceSlug: string[];
                    } | null | undefined;
                    slug: string;
                    source?: {
                        changedAt?: string | null | undefined;
                        dataSourceUpdatedAt?: string | null | undefined;
                        detail?: string | null | undefined;
                        kind?: string | null | undefined;
                        pendingApproval?: number | null | undefined;
                        sourceId?: string | null | undefined;
                        status?: string | null | undefined;
                    } | null | undefined;
                    status?: {
                        isFeatured: boolean;
                        isHidden: boolean;
                        isVerified: boolean;
                        showOnSitemap: boolean;
                    } | undefined;
                    typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                    updatedAt?: string | null | undefined;
                };
                acceleratorName: string;
                asOfDate: string;
                batch?: string | null | undefined;
                id: string;
                program?: string | null | undefined;
                status?: string | null | undefined;
            }[];
            detail: {
                asOfDate?: string | null | undefined;
                createdAt?: string | null | undefined;
                creator?: string | null | undefined;
                dataConfidence?: "high" | "low" | "medium" | null | undefined;
                derivedRange?: {
                    asOfDate: string;
                    bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                    monthsFromNow: number;
                    targetDate: string;
                } | null | undefined;
                discreteValue?: number | null | undefined;
                entityId: string;
                id: number;
                source?: string | null | undefined;
                sourceRecord?: {
                    changedAt?: string | null | undefined;
                    operation?: "CREATE" | "DELETE" | "UPDATE" | null | undefined;
                    provenanceSource?: {
                        actorType?: "agent" | "employee" | undefined;
                        agentChassis?: string | null | undefined;
                        agentModel?: string | null | undefined;
                        sourceDetail: string;
                        sourceProvider?: string | null | undefined;
                        sourceProviderId?: string | null | undefined;
                        sourceProviderSlug?: string | null | undefined;
                        sourceType: "api" | "aventureStaff" | "blogArticle" | "firstPartyWebsite" | "import" | "llm" | "manual" | "newsArticle" | "relatedPartyWebsite" | "requestChangeForm" | "thirdPartyWebsite";
                    } | null | undefined;
                    source?: string | null | undefined;
                } | null | undefined;
                textValue?: string | null | undefined;
                typeResearchDetail: string;
                updatedAt?: string | null | undefined;
                valueResearchDetail?: string | null | undefined;
                valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
            }[];
        };
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
    }, unknown>>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
type PageResultEntityListDefinition = z.infer<typeof PageResultEntityListSchemaDefinition>;
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
export declare const PageResultEntityListSchema: z.ZodType<PageResultEntityListDefinition>;
export type PageResultEntityList = z.infer<typeof PageResultEntityListSchema>;
declare const PageResultLocationDirectoryEntrySchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodObject<{
        canonicalSlug: z.ZodString;
        entityCount: z.ZodNumber;
        identifier: z.ZodType<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            cityId?: number | null | undefined;
            cityName?: string | null | undefined;
            countryId?: number | null | undefined;
            countryIso2?: string | null | undefined;
            countryName?: string | null | undefined;
            scope: "city" | "country" | "state";
            stateAbbrev?: string | null | undefined;
            stateId?: number | null | undefined;
            stateName?: string | null | undefined;
        }, unknown>>;
        latestUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        name: z.ZodString;
        parentLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodString;
    }, z.core.$strip>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
type PageResultLocationDirectoryEntryDefinition = z.infer<typeof PageResultLocationDirectoryEntrySchemaDefinition>;
/**
 * @openapiSchema PageResultLocationDirectoryEntry
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape pagination.page-result-location-directory-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export declare const PageResultLocationDirectoryEntrySchema: z.ZodType<PageResultLocationDirectoryEntryDefinition>;
export type PageResultLocationDirectoryEntry = z.infer<typeof PageResultLocationDirectoryEntrySchema>;
declare const PageResultNewsSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        pendingApproval?: number | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        author?: string | null | undefined;
        category?: string | null | undefined;
        createdAt?: string | null | undefined;
        excerpt?: string | null | undefined;
        externalNewsArticle?: boolean | null | undefined;
        id: number;
        newsImageThumbnail?: string | null | undefined;
        newsUrlOriginal?: string | null | undefined;
        pendingApproval?: number | null | undefined;
        publication?: string | null | undefined;
        publishedAt?: string | null | undefined;
        slug?: string | null | undefined;
        source?: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        } | undefined;
        title: string;
        updatedAt?: string | null | undefined;
    }, unknown>>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
type PageResultNewsDefinition = z.infer<typeof PageResultNewsSchemaDefinition>;
/**
 * @openapiSchema PageResultNews
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/search/all
 * @usedBySchema FederatedSearchSchema
 * @contractShape pagination.page-result-news
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export declare const PageResultNewsSchema: z.ZodType<PageResultNewsDefinition>;
export type PageResultNews = z.infer<typeof PageResultNewsSchema>;
declare const PageResultPersonSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        status?: {
            isHidden: boolean;
            showOnSitemap: boolean;
        } | undefined;
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown>>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
type PageResultPersonDefinition = z.infer<typeof PageResultPersonSchemaDefinition>;
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
export declare const PageResultPersonSchema: z.ZodType<PageResultPersonDefinition>;
export type PageResultPerson = z.infer<typeof PageResultPersonSchema>;
/**
 * @openapiSchema PageResultSitemapUrlSlot
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationSitemapSchema
 * @contractShape pagination.page-result-sitemap-url-slot
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/PageResult.kt
 */
export declare const PageResultSitemapUrlSlotSchema: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        imagePath?: string | null | undefined;
        lastUpdatedAt: string;
        path: string;
        slotKey: string;
        slug: string;
    }, unknown, z.core.$ZodTypeInternals<{
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        imagePath?: string | null | undefined;
        lastUpdatedAt: string;
        path: string;
        slotKey: string;
        slug: string;
    }, unknown>>>;
    number: z.ZodInt;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
    totalPages: z.ZodInt;
}, z.core.$strip>;
export type PageResultSitemapUrlSlot = z.infer<typeof PageResultSitemapUrlSlotSchema>;
declare const PageSavedViewSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt: string;
        frontmatter: {
            description?: string | null | undefined;
            title: string;
        };
        id: number;
        param: {
            column: string[];
            columnWidth: number[];
            direction?: string | null | undefined;
            filter: {
                acceleratorBrand?: string[] | undefined;
                acceleratorCohort?: string[] | undefined;
                acceleratorName?: string[] | undefined;
                acceleratorStatus?: string[] | undefined;
                affinity?: string[] | undefined;
                createdAtRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                employeeCountRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                entityId?: string[] | undefined;
                entityName?: string[] | undefined;
                featured?: boolean | null | undefined;
                fundraiseActivity?: {
                    amountInvestedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    amountRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    investedCompanyName?: string[] | undefined;
                    investorActivity?: {
                        averageAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        largestAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        smallestAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        totalAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        totalInvestmentRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                    } | undefined;
                    lastRoundYearRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    round?: string[] | undefined;
                    totalRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    valuationRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                } | undefined;
                hasFundraising?: boolean | null | undefined;
                hasLogo?: boolean | null | undefined;
                hasRealLogo?: boolean | null | undefined;
                headquartersCity?: string[] | undefined;
                headquartersCountry?: string[] | undefined;
                headquartersState?: string[] | undefined;
                industry?: string[] | undefined;
                isHidden?: boolean | null | undefined;
                letter?: string | null | undefined;
                location?: string[] | undefined;
                logoOption?: {
                    sortPriority: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST";
                } | undefined;
                mainProduct?: string[] | undefined;
                operatingStatus?: string[] | undefined;
                portfolioHeadquartersCity?: string[] | undefined;
                portfolioHeadquartersCountry?: string[] | undefined;
                portfolioHeadquartersState?: string[] | undefined;
                qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
                semanticQuery?: string | null | undefined;
                showOnSitemap?: boolean | null | undefined;
                slug?: string[] | undefined;
                stage?: string[] | undefined;
                suppressNonOperating?: boolean | null | undefined;
                suppressZeroTotalRaised?: boolean | null | undefined;
                tag?: string[] | undefined;
                textSearch?: string | null | undefined;
                typeCustomer?: string[] | undefined;
                typeModel?: string[] | undefined;
                typeOwnership?: string[] | undefined;
                typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
                typeRevenue?: string[] | undefined;
                typeTechnologyUsed?: string[] | undefined;
                updatedAtRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                url?: string | null | undefined;
                urlDomain?: string | null | undefined;
                urlMatchMode?: "domain" | "hostPath" | undefined;
                urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
                yearFoundedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
            };
            orderBy?: {
                id?: string | null | undefined;
                label?: string | null | undefined;
                value: string;
            } | null | undefined;
            page?: number | null | undefined;
            personFilter?: {
                arrayFilter?: {
                    amountInvestedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    amountRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    entityName?: string[] | null | undefined;
                    investedCompany?: string[] | null | undefined;
                    personTitle?: string[] | null | undefined;
                    round?: string[] | null | undefined;
                    totalInvestmentCount?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | null | undefined;
                } | undefined;
                entityId?: string | null | undefined;
                entitySlug?: string | null | undefined;
                firstName?: string | null | undefined;
                includeAddress?: boolean | null | undefined;
                includeUrl?: boolean | null | undefined;
                investorActivity?: {
                    averageAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    largestAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    smallestAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    totalAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    totalInvestmentRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                } | undefined;
                isCurrent?: boolean | null | undefined;
                lastName?: string | null | undefined;
                letter?: string | null | undefined;
                role?: string | null | undefined;
                search?: string | null | undefined;
                semanticQuery?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            size?: number | null | undefined;
        };
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        frontmatter: {
            description?: string | null | undefined;
            title: string;
        };
        id: number;
        param: {
            column: string[];
            columnWidth: number[];
            direction?: string | null | undefined;
            filter: {
                acceleratorBrand?: string[] | undefined;
                acceleratorCohort?: string[] | undefined;
                acceleratorName?: string[] | undefined;
                acceleratorStatus?: string[] | undefined;
                affinity?: string[] | undefined;
                createdAtRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                employeeCountRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
                entityId?: string[] | undefined;
                entityName?: string[] | undefined;
                featured?: boolean | null | undefined;
                fundraiseActivity?: {
                    amountInvestedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    amountRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    investedCompanyName?: string[] | undefined;
                    investorActivity?: {
                        averageAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        largestAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        smallestAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        totalAmountInvestedUsdRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                        totalInvestmentRange?: {
                            max?: number | null | undefined;
                            min?: number | null | undefined;
                        }[] | undefined;
                    } | undefined;
                    lastRoundYearRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    round?: string[] | undefined;
                    totalRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    valuationRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                } | undefined;
                hasFundraising?: boolean | null | undefined;
                hasLogo?: boolean | null | undefined;
                hasRealLogo?: boolean | null | undefined;
                headquartersCity?: string[] | undefined;
                headquartersCountry?: string[] | undefined;
                headquartersState?: string[] | undefined;
                industry?: string[] | undefined;
                isHidden?: boolean | null | undefined;
                letter?: string | null | undefined;
                location?: string[] | undefined;
                logoOption?: {
                    sortPriority: "ANY_LOGO_FIRST" | "NONE" | "REAL_LOGO_FIRST";
                } | undefined;
                mainProduct?: string[] | undefined;
                operatingStatus?: string[] | undefined;
                portfolioHeadquartersCity?: string[] | undefined;
                portfolioHeadquartersCountry?: string[] | undefined;
                portfolioHeadquartersState?: string[] | undefined;
                qualityGate?: "COMPANY_LISTING_READY" | "NONE" | undefined;
                semanticQuery?: string | null | undefined;
                showOnSitemap?: boolean | null | undefined;
                slug?: string[] | undefined;
                stage?: string[] | undefined;
                suppressNonOperating?: boolean | null | undefined;
                suppressZeroTotalRaised?: boolean | null | undefined;
                tag?: string[] | undefined;
                textSearch?: string | null | undefined;
                typeCustomer?: string[] | undefined;
                typeModel?: string[] | undefined;
                typeOwnership?: string[] | undefined;
                typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | undefined;
                typeRevenue?: string[] | undefined;
                typeTechnologyUsed?: string[] | undefined;
                updatedAtRange?: {
                    max?: string | null | undefined;
                    min?: string | null | undefined;
                } | null | undefined;
                url?: string | null | undefined;
                urlDomain?: string | null | undefined;
                urlMatchMode?: "domain" | "hostPath" | undefined;
                urlType?: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube" | null | undefined;
                yearFoundedRange?: {
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }[] | undefined;
            };
            orderBy?: {
                id?: string | null | undefined;
                label?: string | null | undefined;
                value: string;
            } | null | undefined;
            page?: number | null | undefined;
            personFilter?: {
                arrayFilter?: {
                    amountInvestedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    amountRaisedRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    entityName?: string[] | null | undefined;
                    investedCompany?: string[] | null | undefined;
                    personTitle?: string[] | null | undefined;
                    round?: string[] | null | undefined;
                    totalInvestmentCount?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | null | undefined;
                    typeRecord?: ("Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service")[] | null | undefined;
                } | undefined;
                entityId?: string | null | undefined;
                entitySlug?: string | null | undefined;
                firstName?: string | null | undefined;
                includeAddress?: boolean | null | undefined;
                includeUrl?: boolean | null | undefined;
                investorActivity?: {
                    averageAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    largestAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    smallestAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    totalAmountInvestedUsdRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                    totalInvestmentRange?: {
                        max?: number | null | undefined;
                        min?: number | null | undefined;
                    }[] | undefined;
                } | undefined;
                isCurrent?: boolean | null | undefined;
                lastName?: string | null | undefined;
                letter?: string | null | undefined;
                role?: string | null | undefined;
                search?: string | null | undefined;
                semanticQuery?: string | null | undefined;
                status?: string | null | undefined;
            } | null | undefined;
            size?: number | null | undefined;
        };
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageSavedViewDefinition = z.infer<typeof PageSavedViewSchemaDefinition>;
/**
 * @openapiSchema PageSavedView
 * @endpoint GET /v1/app/saved-views
 * @contractShape pagination.page-saved-view
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageSavedViewSchema: z.ZodType<PageSavedViewDefinition>;
export type PageSavedView = z.infer<typeof PageSavedViewSchema>;
declare const PageSearchDuplicateCandidateScoreSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        externalId?: string | null | undefined;
        id: string;
        isHidden?: boolean | null | undefined;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        showOnSitemap?: boolean | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        externalId?: string | null | undefined;
        id: string;
        isHidden?: boolean | null | undefined;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        showOnSitemap?: boolean | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageSearchDuplicateCandidateScoreDefinition = z.infer<typeof PageSearchDuplicateCandidateScoreSchemaDefinition>;
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
export declare const PageSearchDuplicateCandidateScoreSchema: z.ZodType<PageSearchDuplicateCandidateScoreDefinition>;
export type PageSearchDuplicateCandidateScore = z.infer<typeof PageSearchDuplicateCandidateScoreSchema>;
declare const PageSitemapUrlSlotSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        imagePath?: string | null | undefined;
        lastUpdatedAt: string;
        path: string;
        slotKey: string;
        slug: string;
    }, unknown, z.core.$ZodTypeInternals<{
        family: "blogArticle" | "blogCategory" | "blogTag" | "companyImage" | "companyUrl" | "governmentUrl" | "investorUrl" | "locationCity" | "locationCountry" | "locationState" | "news" | "nonprofitUrl" | "person" | "personImage";
        imagePath?: string | null | undefined;
        lastUpdatedAt: string;
        path: string;
        slotKey: string;
        slug: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageSitemapUrlSlotDefinition = z.infer<typeof PageSitemapUrlSlotSchemaDefinition>;
/**
 * @openapiSchema PageSitemapUrlSlot
 * @endpoint GET /v1/sitemap/url-slots
 * @contractShape pagination.page-sitemap-url-slot
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageSitemapUrlSlotSchema: z.ZodType<PageSitemapUrlSlotDefinition>;
export type PageSitemapUrlSlot = z.infer<typeof PageSitemapUrlSlotSchema>;
declare const PageSocialMediaPostSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        attemptCount: number;
        createdAt: string;
        eventType: "acquisition" | "fundraiseRound" | "newCompany" | "newsArticle";
        externalPostId?: string | null | undefined;
        id: number;
        lastError?: string | null | undefined;
        postedAt?: string | null | undefined;
        skipReason?: string | null | undefined;
        sourceId: string;
        status: "failed" | "pending" | "posted" | "skipped";
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        attemptCount: number;
        createdAt: string;
        eventType: "acquisition" | "fundraiseRound" | "newCompany" | "newsArticle";
        externalPostId?: string | null | undefined;
        id: number;
        lastError?: string | null | undefined;
        postedAt?: string | null | undefined;
        skipReason?: string | null | undefined;
        sourceId: string;
        status: "failed" | "pending" | "posted" | "skipped";
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageSocialMediaPostDefinition = z.infer<typeof PageSocialMediaPostSchemaDefinition>;
/**
 * @openapiSchema PageSocialMediaPost
 * @endpoint GET /v1/social/posts
 * @contractShape pagination.page-social-media-post
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageSocialMediaPostSchema: z.ZodType<PageSocialMediaPostDefinition>;
export type PageSocialMediaPost = z.infer<typeof PageSocialMediaPostSchema>;
declare const PageSourceDocumentListSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        cacheHitCount: number;
        createdAt: string;
        documentType: string;
        expiresAt?: string | null | undefined;
        httpStatus?: number | null | undefined;
        id: string;
        lastAccessedAt?: string | null | undefined;
        provider: string;
        providerRequestId?: string | null | undefined;
        rawByteCount?: number | null | undefined;
        rawCharset?: string | null | undefined;
        rawMediaType?: string | null | undefined;
        sourceKey: string;
        upstreamContentEncoding?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        cacheHitCount: number;
        createdAt: string;
        documentType: string;
        expiresAt?: string | null | undefined;
        httpStatus?: number | null | undefined;
        id: string;
        lastAccessedAt?: string | null | undefined;
        provider: string;
        providerRequestId?: string | null | undefined;
        rawByteCount?: number | null | undefined;
        rawCharset?: string | null | undefined;
        rawMediaType?: string | null | undefined;
        sourceKey: string;
        upstreamContentEncoding?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageSourceDocumentListDefinition = z.infer<typeof PageSourceDocumentListSchemaDefinition>;
/**
 * @openapiSchema PageSourceDocumentList
 * @endpoint GET /v1/research/source-documents
 * @contractShape pagination.page-source-document-list
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageSourceDocumentListSchema: z.ZodType<PageSourceDocumentListDefinition>;
export type PageSourceDocumentList = z.infer<typeof PageSourceDocumentListSchema>;
declare const PageUniqueIdSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageUniqueIdDefinition = z.infer<typeof PageUniqueIdSchemaDefinition>;
/**
 * @openapiSchema PageUniqueId
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @contractShape pagination.page-unique-id
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageUniqueIdSchema: z.ZodType<PageUniqueIdDefinition>;
export type PageUniqueId = z.infer<typeof PageUniqueIdSchema>;
declare const PageUrlSlugRedirectSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt: string;
        newUrl: string;
        oldUrl: string;
        redirectId: number;
        redirectType: number;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        newUrl: string;
        oldUrl: string;
        redirectId: number;
        redirectType: number;
        updatedAt: string;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageUrlSlugRedirectDefinition = z.infer<typeof PageUrlSlugRedirectSchemaDefinition>;
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
export declare const PageUrlSlugRedirectSchema: z.ZodType<PageUrlSlugRedirectDefinition>;
export type PageUrlSlugRedirect = z.infer<typeof PageUrlSlugRedirectSchema>;
declare const PageWebSiteSchemaDefinition: z.ZodObject<{
    content: z.ZodOptional<z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        domain: string;
        id?: number | null | undefined;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        pages: Record<string, {
            comparisonTarget?: string[] | null | undefined;
            kind?: string | null | undefined;
            label?: string | null | undefined;
            offDomain?: boolean | null | undefined;
            url: string;
        }[]>;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        domain: string;
        id?: number | null | undefined;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        pages: Record<string, {
            comparisonTarget?: string[] | null | undefined;
            kind?: string | null | undefined;
            label?: string | null | undefined;
            offDomain?: boolean | null | undefined;
            url: string;
        }[]>;
        updatedAt?: string | null | undefined;
    }, unknown>>>>;
    empty: z.ZodOptional<z.ZodBoolean>;
    first: z.ZodOptional<z.ZodBoolean>;
    last: z.ZodOptional<z.ZodBoolean>;
    number: z.ZodOptional<z.ZodInt>;
    numberOfElements: z.ZodOptional<z.ZodInt>;
    pageable: z.ZodOptional<z.ZodObject<{
        offset: z.ZodOptional<z.ZodNumber>;
        paged: z.ZodOptional<z.ZodBoolean>;
        pageNumber: z.ZodOptional<z.ZodInt>;
        pageSize: z.ZodOptional<z.ZodInt>;
        sort: z.ZodOptional<z.ZodObject<{
            empty: z.ZodOptional<z.ZodBoolean>;
            sorted: z.ZodOptional<z.ZodBoolean>;
            unsorted: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        unpaged: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodObject<{
        empty: z.ZodOptional<z.ZodBoolean>;
        sorted: z.ZodOptional<z.ZodBoolean>;
        unsorted: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    totalElements: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
type PageWebSiteDefinition = z.infer<typeof PageWebSiteSchemaDefinition>;
/**
 * @openapiSchema PageWebSite
 * @endpoint GET /v1/entities/{entityId}/sites
 * @contractShape pagination.page-web-site
 * @contractRole canonical
 * @ownerModule pagination/schemas.ts
 */
export declare const PageWebSiteSchema: z.ZodType<PageWebSiteDefinition>;
export type PageWebSite = z.infer<typeof PageWebSiteSchema>;
export {};
//# sourceMappingURL=schemas.d.ts.map