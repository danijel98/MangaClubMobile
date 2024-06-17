import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Root, Popup } from 'react-native-popup-confirm-toast'
import { CustomCheckBox, CustomText } from '../../atoms';

interface IConfirmDialog {
    title: string,
    textBody: string,
    onConfirm: (val: any) => void,
}

const ConfirmDialog: FC<IConfirmDialog> = ({ title, textBody, onConfirm }) => {
    return (
        <Root>
            <View>
                {
                    Popup.show({
                        type: 'confirm',
                        title: title,
                        textBody: textBody,
                        buttonText: 'Yes',
                        confirmText: 'No',
                        callback: () => {
                            onConfirm;
                            Popup.hide();
                        },
                        cancelCallback: () => {
                            alert('Cancel Callback && hidden');
                            Popup.hide();
                        },
                    })}

                <CustomText>Open Popup Confirm Message</CustomText>
            </View>
        </Root >
    );
}
export default ConfirmDialog;
