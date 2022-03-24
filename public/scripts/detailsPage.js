window.onload = () => {
    document.querySelector('#overlay').style = 'display: none';

    document.querySelector('#addBtn').addEventListener('click', () => {
        document.querySelector('#overlay').style = 'display: block';
        document.querySelector('#window').style = 'display: block';
        window.scrollTo(0,0);
    });

    document.querySelector('#cancelBtn').addEventListener('click', () => {
        document.querySelector('#overlay').style = 'display: none';
        document.querySelector('#window').style = 'display: none';
    });
}