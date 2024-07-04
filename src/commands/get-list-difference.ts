import * as vscode from 'vscode';

export function getListDifference() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage('No active text editor!');
    return;
  }

  const document = editor.document.getText();

  const lists: Array<Array<string>> = [];

  document.split('\n\n').filter(list => list.length).forEach((list) => {
    lists.push(list.split('\n'));
  });

  const differences: Array<string> = [];

  for (const list of lists) {
    for (const item of list) {
      if (!lists.every((l) => l.includes(item)) && !differences.includes(item)) {
        differences.push(item);
      }
    }
  }

  editor.edit((editBuilder) => {
    const updateText = [`[${differences.join(', ')}]`, document].join('\n\n');

    editBuilder.replace(new vscode.Range(0, 0, document.split('\n').length, 0), updateText);
  });
}