import {getUUID} from '/UUID';
import {getRealm} from '/Realm';

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      isDebit: true,
      color: '#1abc9c',
      order: 0,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').sorted('order');
};
