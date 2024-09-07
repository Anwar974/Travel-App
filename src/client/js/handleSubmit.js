
export const handleSubmit = async (event) =>  {
    event.preventDefault();
    const url = document.getElementById("articleUrl").value;


    if (!validateUrl(url)) {
        alert('Please enter a valid URL.');
        return;
    }

try {
    const response = await fetch('http://localhost:8082/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        const data = await response.json();

        console.log(data);

        // Update UI with results
        document.getElementById('polarity').innerHTML = `Polarity: ${data.score_tag || 'N/A'}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity || 'N/A'}`;
        document.getElementById('text').innerHTML = `Text: ${data.sentence_list ? data.sentence_list[0].text : 'N/A'}`;        

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to process the response');
    }
}



export const validateUrl = (url) => {
  
    const regex = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    return regex.test(url);
};