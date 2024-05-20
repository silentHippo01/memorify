
interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    return (
        <Svg
            className={className}
            {...otherProps}
        />
    );
};
