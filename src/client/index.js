import { handleSubmit } from './js/handleSubmit.js';

import './styles/main.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/base.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('articleForm');
    form.addEventListener('submit', handleSubmit);
});

export {handleSubmit};