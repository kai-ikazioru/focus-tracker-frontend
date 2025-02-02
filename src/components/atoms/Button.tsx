import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiMailLine } from "react-icons/ri"

export const ButtonTypes = {
    main: 'solid',
    sub: 'subtle',
} as const; 
type ButtonType = typeof ButtonTypes[keyof typeof ButtonTypes];

export const ButtonIcon = {
    mail: 'mail',
} as const;
type ButtonIcon = typeof ButtonIcon[keyof typeof ButtonIcon];

type Props = {
    text: string;
    buttonType?: ButtonType;
    buttonIcon?: ButtonIcon;
    // TODO: 開発がある程度進んだらonClickのオプショナルプロパティをどうするか検討する。
    // 現状onClickが必須プロパティでないのは開発時にボタンの仮置きができなくてめんどくさいから。
    onClick?: void;
}

export const StyleButton = (props: Props) => {
    const {text, buttonType, buttonIcon, onClick} = props;
    const [icon, setIcon] = useState<React.ReactNode>(null);
    useEffect(() => {
        if(buttonIcon === 'mail'){
            setIcon(<RiMailLine />)
        }
    }, [])

    return(
        <Button 
        colorPalette='cyan'
        variant={buttonType}
        onClick={onClick ? onClick : undefined}
        >
            {icon}
            {text}
        </Button>
    );
};