import { Button as GluestackButton, ButtonText } from "@gluestack-ui/themed";

// Functional Component with props
const Button = (props) => {
    return (
        <GluestackButton
            onPress={props.onPress}
            bg="$primary500"
            borderRadius="$full"
            py="$4"
            px="$6"
            $hover={{
                bg: "$primary600",
            }}
            $active={{
                bg: "$primary700",
            }}
            shadowColor="$primary900"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.25}
            shadowRadius={3.84}
            elevation={5}
        >
            <ButtonText
                color="$white"
                fontSize="$md"
                fontWeight="$bold"
                textTransform="uppercase"
            >
                {props.text}
            </ButtonText>
        </GluestackButton>
    );
};

export default Button;
