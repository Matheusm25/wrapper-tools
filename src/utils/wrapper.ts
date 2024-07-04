import * as vscode from 'vscode';

export function wrapperWith(wrapperWith: string = '', useBrackets: boolean = false) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage('No active text editor!');
    return;
  } 

  const document = editor.document.getText();
  const lines = document.split('\n').length;

  const updateText = document
    .split('\n')
    .map((line, index) => {
      if (line === '') {
        return line;
      }
      return `${wrapperWith || ''}${line}${wrapperWith || ''}${index !== lines - 1 ? ',' : ''}`;
    })
    .join('\n');

  editor.edit((editBuilder) => {
    editBuilder.replace(
      new vscode.Range(0, 0, document.split('\n').length, 0),
      useBrackets ? `[${updateText}]`  : updateText,
    );
  });
}