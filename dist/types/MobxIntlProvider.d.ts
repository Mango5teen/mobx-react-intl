/// <reference types="react" />
import { LocaleStore } from "./LocaleStore";
export declare const MobxIntlProvider: (({ locale, children, ...props }: {
    locale: LocaleStore;
    children: any;
}) => JSX.Element) & import("mobx-react").IWrappedComponent<{
    locale: LocaleStore;
    children: any;
}>;
