import { NormalizedLocale } from "../../types/NormalizedLocale";
import { normalize } from "../../utils/locale";

describe("Syncing/utils/locale", () =>
{
    it("normalize - undefined", () =>
    {
        expect(normalize(undefined as any)).toEqual(NormalizedLocale.EN_US);
    });

    it("normalize - en", () =>
    {
        expect(normalize("en")).toEqual(NormalizedLocale.EN_US);
    });

    it("normalize - en-us", () =>
    {
        expect(normalize("en-us")).toEqual(NormalizedLocale.EN_US);
    });

    it("normalize - en-US", () =>
    {
        expect(normalize("en-US")).toEqual(NormalizedLocale.EN_US);
    });

    it("normalize - zh-cn", () =>
    {
        expect(normalize("zh-cn")).toEqual(NormalizedLocale.ZH_CN);
    });

    it("normalize - zh-CN", () =>
    {
        expect(normalize("zh-CN")).toEqual(NormalizedLocale.ZH_CN);
    });

});
