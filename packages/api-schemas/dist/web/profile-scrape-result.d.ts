import { z } from "zod/v4";
declare const WebProfileScrapeResultSchemaDefinition: z.ZodObject<{
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    profile: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<{
        about?: string | null | undefined;
        activity: {
            id?: string | null | undefined;
            imageUrl?: string | null | undefined;
            interaction?: string | null | undefined;
            link?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        alsoViewedProfile: {
            about?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        bannerUrl?: string | null | undefined;
        bioLink: {
            label?: string | null | undefined;
            url?: string | null | undefined;
        }[];
        city?: string | null | undefined;
        connectionCount?: number | null | undefined;
        countryCode?: string | null | undefined;
        currentCompany?: string | null | undefined;
        currentCompanyLocation?: string | null | undefined;
        currentCompanySlug?: string | null | undefined;
        currentCompanyUrl?: string | null | undefined;
        currentTitle?: string | null | undefined;
        education: {
            endYear?: string | null | undefined;
            school?: string | null | undefined;
            schoolLogoUrl?: string | null | undefined;
            schoolUrl?: string | null | undefined;
            startYear?: string | null | undefined;
        }[];
        educationDetail?: string | null | undefined;
        experience: {
            company?: string | null | undefined;
            companyId?: string | null | undefined;
            companyLogoUrl?: string | null | undefined;
            companyUrl?: string | null | undefined;
            endDate?: string | null | undefined;
            startDate?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        fetchedAt: string;
        firstName?: string | null | undefined;
        followerCount?: number | null | undefined;
        headline?: string | null | undefined;
        influencer?: boolean | null | undefined;
        lastName?: string | null | undefined;
        linkedinNumericId?: string | null | undefined;
        linkedinSlug?: string | null | undefined;
        locationName?: string | null | undefined;
        memorializedAccount?: boolean | null | undefined;
        name: string;
        photoUrl?: string | null | undefined;
        post: {
            attribution?: string | null | undefined;
            createdAt?: string | null | undefined;
            id?: string | null | undefined;
            interaction?: string | null | undefined;
            link?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        profileUrl?: string | null | undefined;
        similarProfile: {
            about?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        sourceUrl: string;
    }, unknown, z.core.$ZodTypeInternals<{
        about?: string | null | undefined;
        activity: {
            id?: string | null | undefined;
            imageUrl?: string | null | undefined;
            interaction?: string | null | undefined;
            link?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        alsoViewedProfile: {
            about?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        bannerUrl?: string | null | undefined;
        bioLink: {
            label?: string | null | undefined;
            url?: string | null | undefined;
        }[];
        city?: string | null | undefined;
        connectionCount?: number | null | undefined;
        countryCode?: string | null | undefined;
        currentCompany?: string | null | undefined;
        currentCompanyLocation?: string | null | undefined;
        currentCompanySlug?: string | null | undefined;
        currentCompanyUrl?: string | null | undefined;
        currentTitle?: string | null | undefined;
        education: {
            endYear?: string | null | undefined;
            school?: string | null | undefined;
            schoolLogoUrl?: string | null | undefined;
            schoolUrl?: string | null | undefined;
            startYear?: string | null | undefined;
        }[];
        educationDetail?: string | null | undefined;
        experience: {
            company?: string | null | undefined;
            companyId?: string | null | undefined;
            companyLogoUrl?: string | null | undefined;
            companyUrl?: string | null | undefined;
            endDate?: string | null | undefined;
            startDate?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        fetchedAt: string;
        firstName?: string | null | undefined;
        followerCount?: number | null | undefined;
        headline?: string | null | undefined;
        influencer?: boolean | null | undefined;
        lastName?: string | null | undefined;
        linkedinNumericId?: string | null | undefined;
        linkedinSlug?: string | null | undefined;
        locationName?: string | null | undefined;
        memorializedAccount?: boolean | null | undefined;
        name: string;
        photoUrl?: string | null | undefined;
        post: {
            attribution?: string | null | undefined;
            createdAt?: string | null | undefined;
            id?: string | null | undefined;
            interaction?: string | null | undefined;
            link?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        profileUrl?: string | null | undefined;
        similarProfile: {
            about?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        sourceUrl: string;
    }, unknown>>, z.ZodType<{
        about?: string | null | undefined;
        aboutUnformatted?: string | null | undefined;
        additionalInformation?: string | null | undefined;
        affiliatedPage: {
            industry?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        bannerUrl?: string | null | undefined;
        companyNumericId?: string | null | undefined;
        companySize?: string | null | undefined;
        companySlug?: string | null | undefined;
        crunchbaseUrl?: string | null | undefined;
        employeeCount?: number | null | undefined;
        featuredEmployee: {
            name?: string | null | undefined;
            photoUrl?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        fetchedAt: string;
        followerCount?: number | null | undefined;
        foundedYear?: number | null | undefined;
        funding?: {
            lastRoundDate?: string | null | undefined;
            lastRoundType?: string | null | undefined;
            roundCount?: number | null | undefined;
        } | null | undefined;
        headquarters?: string | null | undefined;
        industry?: string | null | undefined;
        logoUrl?: string | null | undefined;
        metaDescription?: string | null | undefined;
        name: string;
        office: {
            address?: string | null | undefined;
            directionsUrl?: string | null | undefined;
        }[];
        operatingCountry: string[];
        organizationType?: string | null | undefined;
        profileUrl?: string | null | undefined;
        similarCompany: {
            industry?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        slogan?: string | null | undefined;
        sourceUrl: string;
        update: {
            commentCount?: number | null | undefined;
            date?: string | null | undefined;
            image: string[];
            likeCount?: number | null | undefined;
            postId?: string | null | undefined;
            postUrl?: string | null | undefined;
            text?: string | null | undefined;
            textHtml?: string | null | undefined;
            time?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        website?: string | null | undefined;
        websiteDomain?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        about?: string | null | undefined;
        aboutUnformatted?: string | null | undefined;
        additionalInformation?: string | null | undefined;
        affiliatedPage: {
            industry?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        bannerUrl?: string | null | undefined;
        companyNumericId?: string | null | undefined;
        companySize?: string | null | undefined;
        companySlug?: string | null | undefined;
        crunchbaseUrl?: string | null | undefined;
        employeeCount?: number | null | undefined;
        featuredEmployee: {
            name?: string | null | undefined;
            photoUrl?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        fetchedAt: string;
        followerCount?: number | null | undefined;
        foundedYear?: number | null | undefined;
        funding?: {
            lastRoundDate?: string | null | undefined;
            lastRoundType?: string | null | undefined;
            roundCount?: number | null | undefined;
        } | null | undefined;
        headquarters?: string | null | undefined;
        industry?: string | null | undefined;
        logoUrl?: string | null | undefined;
        metaDescription?: string | null | undefined;
        name: string;
        office: {
            address?: string | null | undefined;
            directionsUrl?: string | null | undefined;
        }[];
        operatingCountry: string[];
        organizationType?: string | null | undefined;
        profileUrl?: string | null | undefined;
        similarCompany: {
            industry?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        slogan?: string | null | undefined;
        sourceUrl: string;
        update: {
            commentCount?: number | null | undefined;
            date?: string | null | undefined;
            image: string[];
            likeCount?: number | null | undefined;
            postId?: string | null | undefined;
            postUrl?: string | null | undefined;
            text?: string | null | undefined;
            textHtml?: string | null | undefined;
            time?: string | null | undefined;
            title?: string | null | undefined;
        }[];
        website?: string | null | undefined;
        websiteDomain?: string | null | undefined;
    }, unknown>>, z.ZodType<{
        accountId?: string | null | undefined;
        bannerUrl?: string | null | undefined;
        biography?: string | null | undefined;
        birthDate?: string | null | undefined;
        businessAccount?: boolean | null | undefined;
        externalLink?: string | null | undefined;
        fetchedAt: string;
        followerCount?: number | null | undefined;
        followingCount?: number | null | undefined;
        governmentAccount?: boolean | null | undefined;
        handle?: string | null | undefined;
        joinedAt?: string | null | undefined;
        location?: string | null | undefined;
        name: string;
        post: {
            description?: string | null | undefined;
            likeCount?: number | null | undefined;
            postedAt?: string | null | undefined;
            postId?: string | null | undefined;
            postUrl?: string | null | undefined;
            replyCount?: number | null | undefined;
            repostCount?: number | null | undefined;
            viewCount?: number | null | undefined;
        }[];
        postCount?: number | null | undefined;
        profileImageUrl?: string | null | undefined;
        profileUrl?: string | null | undefined;
        sourceUrl: string;
        subscriptionCount?: number | null | undefined;
        verified?: boolean | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        accountId?: string | null | undefined;
        bannerUrl?: string | null | undefined;
        biography?: string | null | undefined;
        birthDate?: string | null | undefined;
        businessAccount?: boolean | null | undefined;
        externalLink?: string | null | undefined;
        fetchedAt: string;
        followerCount?: number | null | undefined;
        followingCount?: number | null | undefined;
        governmentAccount?: boolean | null | undefined;
        handle?: string | null | undefined;
        joinedAt?: string | null | undefined;
        location?: string | null | undefined;
        name: string;
        post: {
            description?: string | null | undefined;
            likeCount?: number | null | undefined;
            postedAt?: string | null | undefined;
            postId?: string | null | undefined;
            postUrl?: string | null | undefined;
            replyCount?: number | null | undefined;
            repostCount?: number | null | undefined;
            viewCount?: number | null | undefined;
        }[];
        postCount?: number | null | undefined;
        profileImageUrl?: string | null | undefined;
        profileUrl?: string | null | undefined;
        sourceUrl: string;
        subscriptionCount?: number | null | undefined;
        verified?: boolean | null | undefined;
    }, unknown>>, z.ZodType<{
        about?: string | null | undefined;
        acquiredBy?: {
            acquirer?: string | null | undefined;
            acquirerPermalink?: string | null | undefined;
            acquisitionPrice?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            date?: string | null | undefined;
            transactionName?: string | null | undefined;
        } | null | undefined;
        address?: string | null | undefined;
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        cbRank?: number | null | undefined;
        companyType?: string | null | undefined;
        contactEmail?: string | null | undefined;
        contactPhone?: string | null | undefined;
        countryCode?: string | null | undefined;
        crunchbaseId?: string | null | undefined;
        employeeCountRange?: string | null | undefined;
        fetchedAt: string;
        foundedDate?: string | null | undefined;
        founder: {
            crunchbaseId?: string | null | undefined;
            name?: string | null | undefined;
        }[];
        fullDescription?: string | null | undefined;
        funding?: {
            fundingTotal?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            numFundingRounds?: number | null | undefined;
            numInvestors?: number | null | undefined;
            numLeadInvestors?: number | null | undefined;
        } | null | undefined;
        fundingRound: {
            announcedOn?: string | null | undefined;
            leadInvestor: {
                imageUrl?: string | null | undefined;
                name?: string | null | undefined;
                permalink?: string | null | undefined;
            }[];
            moneyRaised?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            title?: string | null | undefined;
            transactionName?: string | null | undefined;
        }[];
        headquartersRegion: {
            id?: string | null | undefined;
            value?: string | null | undefined;
        }[];
        industry: string[];
        investor: {
            investorType?: string | null | undefined;
            leadInvestor?: boolean | null | undefined;
            name?: string | null | undefined;
            roundName?: string | null | undefined;
        }[];
        ipo?: {
            amountRaised?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            date?: string | null | undefined;
            sharePrice?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            stockLink?: string | null | undefined;
            stockSymbol?: string | null | undefined;
        } | null | undefined;
        ipoStatus?: string | null | undefined;
        legalName?: string | null | undefined;
        logoUrl?: string | null | undefined;
        name: string;
        numAcquisitions?: number | null | undefined;
        numInvestments?: number | null | undefined;
        numNews?: number | null | undefined;
        operatingStatus?: string | null | undefined;
        profileUrl?: string | null | undefined;
        region?: string | null | undefined;
        similarCompany: {
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        socialMediaLink: string[];
        sourceUrl: string;
        stockSymbol?: string | null | undefined;
        uuid?: string | null | undefined;
        website?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        about?: string | null | undefined;
        acquiredBy?: {
            acquirer?: string | null | undefined;
            acquirerPermalink?: string | null | undefined;
            acquisitionPrice?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            date?: string | null | undefined;
            transactionName?: string | null | undefined;
        } | null | undefined;
        address?: string | null | undefined;
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        cbRank?: number | null | undefined;
        companyType?: string | null | undefined;
        contactEmail?: string | null | undefined;
        contactPhone?: string | null | undefined;
        countryCode?: string | null | undefined;
        crunchbaseId?: string | null | undefined;
        employeeCountRange?: string | null | undefined;
        fetchedAt: string;
        foundedDate?: string | null | undefined;
        founder: {
            crunchbaseId?: string | null | undefined;
            name?: string | null | undefined;
        }[];
        fullDescription?: string | null | undefined;
        funding?: {
            fundingTotal?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            numFundingRounds?: number | null | undefined;
            numInvestors?: number | null | undefined;
            numLeadInvestors?: number | null | undefined;
        } | null | undefined;
        fundingRound: {
            announcedOn?: string | null | undefined;
            leadInvestor: {
                imageUrl?: string | null | undefined;
                name?: string | null | undefined;
                permalink?: string | null | undefined;
            }[];
            moneyRaised?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            title?: string | null | undefined;
            transactionName?: string | null | undefined;
        }[];
        headquartersRegion: {
            id?: string | null | undefined;
            value?: string | null | undefined;
        }[];
        industry: string[];
        investor: {
            investorType?: string | null | undefined;
            leadInvestor?: boolean | null | undefined;
            name?: string | null | undefined;
            roundName?: string | null | undefined;
        }[];
        ipo?: {
            amountRaised?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            date?: string | null | undefined;
            sharePrice?: {
                currency?: string | null | undefined;
                value?: number | null | undefined;
                valueUsd?: number | null | undefined;
            } | null | undefined;
            stockLink?: string | null | undefined;
            stockSymbol?: string | null | undefined;
        } | null | undefined;
        ipoStatus?: string | null | undefined;
        legalName?: string | null | undefined;
        logoUrl?: string | null | undefined;
        name: string;
        numAcquisitions?: number | null | undefined;
        numInvestments?: number | null | undefined;
        numNews?: number | null | undefined;
        operatingStatus?: string | null | undefined;
        profileUrl?: string | null | undefined;
        region?: string | null | undefined;
        similarCompany: {
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        socialMediaLink: string[];
        sourceUrl: string;
        stockSymbol?: string | null | undefined;
        uuid?: string | null | undefined;
        website?: string | null | undefined;
    }, unknown>>, z.ZodType<{
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        competitor: {
            financingStatus?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        employeeCount?: number | null | undefined;
        fetchedAt: string;
        financingRoundCount?: number | null | undefined;
        investment: {
            companyName?: string | null | undefined;
            companyUrl?: string | null | undefined;
            dealDate?: string | null | undefined;
            dealSize?: string | null | undefined;
            dealType?: string | null | undefined;
            industry?: string | null | undefined;
        }[];
        investmentCount?: number | null | undefined;
        latestDealAmount?: string | null | undefined;
        latestDealAmountValue?: {
            currency?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        latestDealDate?: string | null | undefined;
        latestDealType?: string | null | undefined;
        name: string;
        pitchbookId?: string | null | undefined;
        profileUrl?: string | null | undefined;
        socialLink: {
            domain?: string | null | undefined;
            link?: string | null | undefined;
        }[];
        sourceUrl: string;
        status?: string | null | undefined;
        yearFounded?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        attribute: {
            group?: string | null | undefined;
            label: string;
            link?: string | null | undefined;
            value: string;
        }[];
        competitor: {
            financingStatus?: string | null | undefined;
            location?: string | null | undefined;
            name?: string | null | undefined;
            profileUrl?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        employeeCount?: number | null | undefined;
        fetchedAt: string;
        financingRoundCount?: number | null | undefined;
        investment: {
            companyName?: string | null | undefined;
            companyUrl?: string | null | undefined;
            dealDate?: string | null | undefined;
            dealSize?: string | null | undefined;
            dealType?: string | null | undefined;
            industry?: string | null | undefined;
        }[];
        investmentCount?: number | null | undefined;
        latestDealAmount?: string | null | undefined;
        latestDealAmountValue?: {
            currency?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        latestDealDate?: string | null | undefined;
        latestDealType?: string | null | undefined;
        name: string;
        pitchbookId?: string | null | undefined;
        profileUrl?: string | null | undefined;
        socialLink: {
            domain?: string | null | undefined;
            link?: string | null | undefined;
        }[];
        sourceUrl: string;
        status?: string | null | undefined;
        yearFounded?: number | null | undefined;
    }, unknown>>]>>;
    snapshotId: z.ZodString;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        DEAD_PAGE: "DEAD_PAGE";
        FAILED: "FAILED";
        READY: "READY";
        RUNNING: "RUNNING";
    }>;
    target: z.ZodType<{
        platform: "CRUNCHBASE" | "LINKEDIN" | "PITCHBOOK" | "X";
        profileKind: "ACCOUNT" | "COMPANY" | "PERSON";
    }, unknown, z.core.$ZodTypeInternals<{
        platform: "CRUNCHBASE" | "LINKEDIN" | "PITCHBOOK" | "X";
        profileKind: "ACCOUNT" | "COMPANY" | "PERSON";
    }, unknown>>;
}, z.core.$strip>;
type WebProfileScrapeResultDefinition = z.infer<typeof WebProfileScrapeResultSchemaDefinition>;
/**
 * Polled state (and, once ready, the structured profile) of an async scrape.
 *
 * @openapiSchema WebProfileScrapeResult
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @contractShape web.profile-scrape-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileScrape.kt
 */
export declare const WebProfileScrapeResultSchema: z.ZodType<WebProfileScrapeResultDefinition>;
export type WebProfileScrapeResult = z.infer<typeof WebProfileScrapeResultSchema>;
export {};
//# sourceMappingURL=profile-scrape-result.d.ts.map