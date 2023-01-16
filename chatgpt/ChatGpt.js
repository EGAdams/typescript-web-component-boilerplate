/*
In this example, I created a new class called ExtensionActivator 
that contains the activate function, this class has a constructor 
that create an instance of the ChatGPT class. This function creates 
an instance of the ChatGPT class, and then it registers a command 
using the vscode.commands.registerCommand method. This command is 
called 'extension.chatGPT' and it will be triggered when the user 
activates it.

The function passed to the registerCommand method checks if there is 
an active text editor, and if there is, it retrieves the selected text.
if the selected text is empty, it shows an information message to the 
user to select text, otherwise it calls the queryChatGPT method of the 
ChatGPT class and pass the selected text as a parameter.

This way, the main code of the extension is only executed when 
the user activates the 'extension.chatGPT' command and has selected 
some text in the active text editor.

*/
const vscode = require('vscode');

class ChatGPT {
        constructor() {
            this.openai = require('openai');
            this.openai.apiKey = "sk-nI2BiTzUKefvnbcoobNQT3BlbkFJTK6umYRkOSdazDb9jLf";
        }
        
        queryChatGPT(query) {
            this.openai.completions.create({
                engine: "text-davinci-002",
                prompt: query,
                max_tokens: 2048,
            }, (error, response) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(response.choices[0].text);
                    this.printTokens(response);
                }
            });
        }
    
        printTokens(response) {
            let tokensUsed = response.metadata.tokens_used;
            console.log("Number of tokens used: " + tokensUsed);
            let tokensRemaining = response.metadata.tokens_remaining;
            console.log("Number of tokens remaining: " + tokensRemaining);
        }
    }
    
    class ExtensionActivator {
        constructor() {
            this.chatGPT = new ChatGPT();
        }
        activate(context) {
            let disposable = vscode.commands.registerCommand('extension.chatGPT', () => {
                let editor = vscode.window.activeTextEditor;
                if (!editor) {
                    vscode.window.showInformationMessage('No document open');
                    return;
                }
                let selectedText = editor.document.getText(editor.selection);
                if (!selectedText) {
                    vscode.window.showInformationMessage('Please select some text');
                    return;
                }
                this.chatGPT.queryChatGPT(selectedText);
            });
            context.subscriptions.push(disposable);
        }
    }
    let extensionActivator = new ExtensionActivator();
    extensionActivator.activate(context);
    