import { Button } from "@chakra-ui/react";

export const ButtonTypes = {
    main: 'solid',
    sub: 'subtle',
} as const; 
type ButtonType = typeof ButtonTypes[keyof typeof ButtonTypes];

type Props = {
    text: string;
    buttonType?: ButtonType;
    // TODO: 開発がある程度進んだらonClickのオプショナルプロパティをどうするか検討する。
    // 現状onClickが必須プロパティでないのは開発時にボタンの仮置きができなくてめんどくさいから。
    onClick?: void;
}

const StyleButton = (props: Props) => {
    const {text, buttonType, onClick} = props;
    return(
        <Button 
        colorPalette='cyan'
        variant={buttonType}
        onClick={onClick ? onClick : undefined}
        >
            {text}
        </Button>
    );
};

export default StyleButton;