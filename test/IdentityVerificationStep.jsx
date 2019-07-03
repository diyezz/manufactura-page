import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CommonInfoStep,
  BirthAndNationalityStep,
  Address,
  Salary,
  PEP,
  Passport,
  Document,
  InfoForClient,
  ConfirmationStep,
  RequestResultStep
} from './Steps';
import {
  changeField, postUserData, getUserData, getUserMembership
} from 'containers/ClientPart/Client/Client.actions';
import { REG_WAY_LIST } from 'utils/constants';
import { getUserSettings } from 'containers/ClientPart/Settings/Settings.actions';

const COMMON_STEPS = [
  'CommonInfo',
  'BirthAndNationality',
  'Address',
  'Salary',
  'PEP',
];

const WAYS = {
  [REG_WAY_LIST.WHITE]: [
    ...COMMON_STEPS,
    'Confirmation',
    'InfoForClient',
    'RequestResultStep',
  ],
  [REG_WAY_LIST.GREY]: [
    ...COMMON_STEPS,
    'Passport',
    'Document',
    'Confirmation',
  ],
  [REG_WAY_LIST.BLACK]: [
    ...COMMON_STEPS,
    'Confirmation',
  ],
};

class IdentityVerificationStep extends Component {

  static propTypes = {
    goNext: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    postUserData: PropTypes.func.isRequired,
    getUserMembership: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    getUserSettings: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    backFromFinish: PropTypes.bool,
    regWay: PropTypes.string,
  }

  _checkMembership = async(page) => {
    if (page >= 5) {
      if (!this.props.regWay || page === 5) {
        await this.props.getUserMembership();
      }
      let { regWay } = this.props;
      regWay = regWay || REG_WAY_LIST.BLACK;
      const stepLength = WAYS[regWay].length;
      if (page === stepLength) {
        if ([REG_WAY_LIST.WHITE, REG_WAY_LIST.BLACK].includes(regWay)) {
          this.props.goNext();
        }
        return false;
      }
      return true;
    }
  }

  async componentDidMount() {
    this.props.getUserSettings();
    const { backFromFinish } = this.props;
    if (!backFromFinish) {
      const result = await this.props.getUserData();
      const { page } = result.profile;
      await this._checkMembership(page);
      let { regWay } = this.props;
      regWay = regWay || REG_WAY_LIST.BLACK;
      const stepLength = WAYS[regWay].length;
      if (regWay === REG_WAY_LIST.GREY && page >= 7) {
        return this.props.changeField('page', 7);
      }
      if (page < 1 || page > stepLength) {
        return this.props.changeField('page', 1);
      }
      if ((page !== 1 || result.profile.surname !== '') && page < stepLength) {
        this.props.changeField('page', page + 1);
      }
    }
  }

  _nextStep = () => {
    let { regWay } = this.props;
    regWay = regWay || REG_WAY_LIST.BLACK;
    if (WAYS[regWay].length === this.props.page) {
      this.props.goNext();
    } else {
      this.props.changeField('page',  this.props.page + 1 );
    }
  }

  _prevStep = () => {
    this.props.changeField('page',  this.props.page - 1 );
  }

  _updateProfile = async (data, type) => {
    this.props.changeField({ ...data }, null, type);
    const result = await this.props.postUserData();
    const isGoNextStep = await this._checkMembership(data.page);
    if (isGoNextStep) {
      this._nextStep();
    }
    if (data.page === WAYS[REG_WAY_LIST.GREY].length) {
      return this.props.goNext();
    }
    return result;
  }

  _manageStep = () => {
    let { page, regWay } = this.props;
    let element;
    const elementProps = {
      ...this.props,
      goNext: this._nextStep,
      goBack: this._prevStep,
      saveFields: this._updateProfile
    };
    regWay = regWay || REG_WAY_LIST.BLACK;
    switch (WAYS[regWay][page - 1]) {
    case 'CommonInfo':
      element = <CommonInfoStep {...elementProps} />;
      break;
    case 'BirthAndNationality':
      element = <BirthAndNationalityStep {...elementProps} />;
      break;
    case 'Address':
      element = <Address {...elementProps} />;
      break;
    case 'Salary':
      element = <Salary {...elementProps} />;
      break;
    case 'PEP':
      element = <PEP {...elementProps} />;
      break;
    case 'Passport':
      element = <Passport {...elementProps} />;
      break;
    case 'Document':
      element = <Document {...elementProps} />;
      break;
    case 'InfoForClient':
      element = <InfoForClient {...elementProps} />;
      break;
    case 'Confirmation':
      element = <ConfirmationStep {...elementProps} />;
      break;
    case 'RequestResultStep':
      element = <RequestResultStep {...elementProps} />;
      break;
    default:
      element = <CommonInfoStep {...elementProps} />;
      break;
    }

    return element;
  }

  render() {
    return this._manageStep();
  }
}

const mapStateToProps = ({ auth: { backFromFinish }, client }) => {
  return { ...client.data, backFromFinish, regWay: client.regWay };
};

export default connect(
  mapStateToProps,
  { changeField, postUserData, getUserData, getUserMembership, getUserSettings }
)(IdentityVerificationStep);
