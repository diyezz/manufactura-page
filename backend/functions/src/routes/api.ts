import { ContactsController } from './../controllers/index';


const api = (router: any) => {
  // All GET requests
  router.get('/getChatInfo', (req: any, res: any) => ContactsController.getChatInfo(req, res));

  // All POST requests
  router.post('/uploadContact', (req: any, res: any) => ContactsController.uploadContact(req, res));
};

export default api;
