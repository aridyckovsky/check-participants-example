# Check Participants Example

<!-- toc -->

Open the `index.html` file in your browser window. 
After the page loads, enter a 24-character Prolific ID.
Click "Check Participant"."

If the participant ID exists in the DynamoDB table **Prolific** with 
the task with the `taskID` specified, then the trial will return a message
stating the participant's inability to participate. Otherwise, it will
say the participant can participate.

