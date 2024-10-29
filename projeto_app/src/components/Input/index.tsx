import React, { forwardRef, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";
import { themes } from "../../global/themes";

import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,       
    iconRightName?: string,     
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {

    const { IconLeft, IconRight, title, iconLeftName, iconRightName, onIconLeftPress, onIconRightPress, ...rest } = props;

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    }

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }

    }

    return (
        <>
            {title && <Text style={style.titleInput}>{title}</Text>}
            <View style={[style.BoxInput, {paddingLeft: calculateSizePaddingLeft()}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput 
                    style={[style.Input, { width: calculateSizeWidth() }]}
                    ref={ref}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={iconRightName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
});