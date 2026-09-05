import { z } from "zod/v4";
declare const EntityResearchSchemaDefinition: z.ZodObject<{
    acceleratorParticipation: z.ZodArray<z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>>;
    detail: z.ZodArray<z.ZodType<{
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
    }, unknown>>>;
    snippet: z.ZodArray<z.ZodObject<{
        compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            characterCount: z.ZodInt;
            meetsRequirements: z.ZodBoolean;
            violation: z.ZodArray<z.ZodString>;
            wordCount: z.ZodInt;
        }, z.core.$strip>>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        entityId: z.ZodUUID;
        id: z.ZodInt;
        isCurrent: z.ZodBoolean;
        isPrimary: z.ZodBoolean;
        source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sourceRecord: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            operation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                CREATE: "CREATE";
                DELETE: "DELETE";
                UPDATE: "UPDATE";
            }>>>;
            provenanceSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                actorType: z.ZodOptional<z.ZodEnum<{
                    agent: "agent";
                    employee: "employee";
                }>>;
                agentChassis: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                agentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sourceDetail: z.ZodString;
                sourceProvider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sourceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sourceProviderSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sourceType: z.ZodEnum<{
                    api: "api";
                    aventureStaff: "aventureStaff";
                    blogArticle: "blogArticle";
                    firstPartyWebsite: "firstPartyWebsite";
                    import: "import";
                    llm: "llm";
                    manual: "manual";
                    newsArticle: "newsArticle";
                    relatedPartyWebsite: "relatedPartyWebsite";
                    requestChangeForm: "requestChangeForm";
                    thirdPartyWebsite: "thirdPartyWebsite";
                }>;
            }, z.core.$strip>>>;
            source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        text: z.ZodString;
        textType: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        visible: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
type EntityResearchDefinition = z.infer<typeof EntityResearchSchemaDefinition>;
/**
 * Combined entity research disclosure: governed detail rows, research text snippets, and joined accelerator participation.
 *
 * @openapiSchema EntityResearch
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityDetailSchema
 * @contractShape entity.research
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearch.kt
 */
export declare const EntityResearchSchema: z.ZodType<EntityResearchDefinition>;
export type EntityResearch = z.infer<typeof EntityResearchSchema>;
export {};
//# sourceMappingURL=research.d.ts.map