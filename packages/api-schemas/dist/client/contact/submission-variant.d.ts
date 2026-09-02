import { z } from "zod/v4";
export declare const REQUEST_DATA_UPDATES_VARIANT: "requestDataUpdates";
/**
 * Client-side submission variants for the contact-form flow.
 *
 * Extends the backend transport `ContactFormSourceSchema` with the
 * frontend-only `requestDataUpdates` route token, which still submits as the
 * canonical backend `contact` source.
 *
 * @shared primitive:single reusable client contact-form submission variant; not direct because front-end form routes and success flows reuse the same non-OpenAPI variant token across submit boundaries
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.contact-form-variant
 * @contractRole canonical
 * @ownerModule client/contact/submission-variant.ts
 */
export declare const ContactFormVariantSchema: z.ZodUnion<readonly [z.ZodEnum<{
    contact: "contact";
    demo: "demo";
    requestCoverage: "requestCoverage";
    "sentry-feedback": "sentry-feedback";
    waitlist: "waitlist";
}>, z.ZodLiteral<"requestDataUpdates">]>;
export type ContactFormVariant = z.infer<typeof ContactFormVariantSchema>;
/**
 * Publicly routable contact-form variants.
 *
 * Excludes the internal Sentry feedback source while keeping the shared
 * `requestDataUpdates` route token available to downstream clients.
 *
 * @shared primitive:single reusable public contact-form submission variant; not direct because front-end route configs and success content exclude internal-only variants while sharing the same canonical token set
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.public-contact-form-variant
 * @contractRole canonical
 * @ownerModule client/contact/submission-variant.ts
 */
export declare const PublicContactFormVariantSchema: z.ZodUnion<readonly [z.ZodEnum<{
    contact: "contact";
    demo: "demo";
    requestCoverage: "requestCoverage";
    waitlist: "waitlist";
}>, z.ZodLiteral<"requestDataUpdates">]>;
export type PublicContactFormVariant = z.infer<typeof PublicContactFormVariantSchema>;
//# sourceMappingURL=submission-variant.d.ts.map