/// <reference types="react" />
declare type Props = {
    offset?: number;
    duration?: number;
    style?: any;
    className?: string;
    initiallyVisible?: boolean;
    animateIn?: string;
    afterAnimatedIn?: any;
    animateOut?: string;
    delay?: number;
    animatePreScroll?: boolean;
    afterAnimatedOut?: any;
    scrollableParentSelector?: string;
    animateOnce?: boolean;
    children?: any;
};
export declare const AnimationOnScroll: ({ offset, duration, style: styleProps, className: classNameProps, initiallyVisible, animateIn, afterAnimatedIn, animateOut, delay, animatePreScroll, afterAnimatedOut, scrollableParentSelector, animateOnce, children, }: Props) => JSX.Element;
export {};
