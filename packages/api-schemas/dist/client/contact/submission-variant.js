import { z } from "zod/v4";
import { ContactFormSourceSchema } from "../../contact/form-source.js";
const FORM_SOURCES = ContactFormSourceSchema.enum;
export const REQUEST_DATA_UPDATES_VARIANT = "requestDataUpdates";
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
export const ContactFormVariantSchema = z.union([
    ContactFormSourceSchema,
    z.literal(REQUEST_DATA_UPDATES_VARIANT),
]);
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
export const PublicContactFormVariantSchema = z.union([
    ContactFormSourceSchema.exclude([FORM_SOURCES["sentry-feedback"]]),
    z.literal(REQUEST_DATA_UPDATES_VARIANT),
]);
//# sourceMappingURL=submission-variant.js.map