import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
    text: string,
    goToPath: string,
};

export const SideBarMenu = (props: Props) => {
    const navigate = useNavigate();
    const { text, goToPath } = props;
    return (
        <Text 
            _hover={{ color: "teal.300", cursor: "pointer" }}
            onClick={() => navigate(goToPath)}
        >
            {text}
        </Text>
    );
};