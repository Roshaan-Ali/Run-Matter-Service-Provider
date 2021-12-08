import Modal from 'react-native-modal';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors';
import Heading from '../components/Heading';
import Inputbox from '../components/Inputbox';
import Button from '../components/Button';
import IconComp from './IconComp';

const {width, height} = Dimensions.get('window');

const ServiceNameChangeModal = ({
  serviceName,
  setServiceName,
  servicePrice,
  setServicePrice,
  isModalVisible,
  setIsModalVisible,
}) => {
  const [sName, setSName] = useState(serviceName);
  const [sPrice, setSPrice] = useState(servicePrice);
  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection={['up']}
      onSwipeMove={p => setIsModalVisible(false)}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.crossStyle}
          activeOpacity={0.8}
          onPress={() => {
            setSName('');
            setSPrice('');
            setIsModalVisible(false);
          }}>
          <IconComp
            type="Entypo"
            iconName="circle-with-cross"
            passedStyle={{color: 'black', fontSize: width * 0.07}}
          />
        </TouchableOpacity>
        <Heading
          passedStyle={styles.label}
          title="Service Name"
          fontType="extra-bold"
        />
        <Inputbox
          value={sName}
          setTextValue={setSName}
          viewStyle={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.08)',
          }}
          passedStyle={styles.inputStyle}
          placeHolderColor="grey"
          placeholderTilte="Service Name"
        />

        <Inputbox
          value={sPrice}
          setTextValue={setSPrice}
          passedStyle={styles.inputStyle}
          placeHolderColor="grey"
          viewStyle={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.08)',
          }}
          placeholderTilte="Service Price"
        />

        {/* Buttons Container  */}
        <View style={styles.flexRow}>
          <Button
            title="ADD NEW SERVICES"
            onBtnPress={() => {
              setServiceName(sName);
              setServicePrice(sPrice);
              setIsModalVisible(false);
            }}
            isBgColor={false}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ServiceNameChangeModal;

const styles = StyleSheet.create({
  crossStyle: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  container: {
    backgroundColor: 'white',
    width: width * 0.9,
    borderRadius: width * 0.06,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  label: {
    fontWeight: '700',
    color: colors.themeBlue,
    fontSize: width * 0.1,
    alignSelf: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    width: width * 0.8,
    fontSize: width * 0.04,
    marginLeft: 0,
    paddingLeft: 0,
    borderRadius: 0,
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.02,
    width: width * 0.75,
    margin: 0,
  },
  cancelBtnStyle: {
    borderRadius: width * 0.025,
    width: width * 0.35,
    borderWidth: 1,
    borderColor: colors.themeBlue,
    margin: 0,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
  },
  cancelBtnTextStyle: {
    color: colors.themeBlue,
    fontSize: width * 0.04,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    // backgroundColor: 'red',
    width: width * 0.75,
  },
});
