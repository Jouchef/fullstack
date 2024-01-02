
sequenceDiagram
    participant browser
    participant server

    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

     Note right of browser: Paluuviestinä koodi 201, joka ilmoittaa onnistuneesta lisäyksestä




