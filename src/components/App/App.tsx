import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import EditStatus from '../EditStatus/EditStatus';
import Form from '../Form/Form';
import * as Api from '../../utils/Api';
import { defaultUser, defultStatus } from '../../utils/Constants';
import citiesList from '../../utils/cities.json';

function App() {
  const [userName, setUserName] = React.useState(defaultUser);
  const [userStatus, setUserStatus] = React.useState(defultStatus);
  const [isPopupOpenStatus, setIsPopupOpenStatus] = React.useState(false);
  const [universities, setUniversities] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  const closePopup = () => {
    setIsPopupOpenStatus(false);
  };

  const handleOpenEditStatusPopup = () => {
    setIsPopupOpenStatus(true);
  };

  const handleEditStatus = (status: string) => {
    setUserStatus(status);
  };

  const handleFormSubmit = (formData: any) => {
    console.log(JSON.stringify(formData));
  };

  const getUniversitiesList = () => {
    Api.getUniversityInfo().then((res) => {
      const universityList = res.map((item: any) => {
        return item.name;
      });
      setUniversities(universityList);
    });
  };

  const getCitiesList = () => {
    const bigCities = citiesList
      .filter((item) => Number(item.population) > 50000)
      .sort();
    const biggestCity = bigCities.reduce((acc, cur) => {
      return acc > cur ? acc : cur;
    });
    const sortedCitiesList = bigCities.filter(
      (item) => item.city !== biggestCity.city
    );
    sortedCitiesList.unshift(biggestCity);
    const sortedCities: any = sortedCitiesList.map((item) => {
      return item.city;
    });
    setCities(sortedCities);
  };

  React.useEffect(() => {
    setUserStatus(userStatus);
  }, [userStatus]);
  React.useEffect(() => {
    getUniversitiesList();
    getCitiesList();
  }, []);

  return (
    <div className={styles.App}>
      <Header
        userName={userName}
        userStatus={userStatus}
        onClickEditStatus={handleOpenEditStatusPopup}
      />
      <Form
        universities={universities}
        cities={cities}
        onFormSubmit={handleFormSubmit}
      />
      <EditStatus
        isPopupOpen={isPopupOpenStatus}
        onClose={closePopup}
        currentStatus={userStatus}
        onEditStatus={handleEditStatus}
      />
    </div>
  );
}

export default App;
