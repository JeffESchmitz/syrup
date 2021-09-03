import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"

export namespace TimelineEventFragmentFragmentData {
  export interface Other {
    __typename: '';
  }

  export interface CommentEventAttachmentsImage {
    __typename: 'Image';
    /**
     * The location of the transformed image as a URL.
     * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
     * Otherwise any transformations which an image type does not support will be ignored.
     */
    transformedSrc: string;
  }
  export interface CommentEventAttachments {
    __typename: 'CommentEventAttachment';
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * The filename of the comment event attachment.
     */
    name: string;
    /**
     * The size of the attachment.
     */
    size: number;
    /**
     * The file extension of the comment event attachment, indicating the file format.
     */
    fileExtension?: string | null;
    /**
     * The URL of the attachment.
     */
    url: string;
    /**
     * The image attached to the comment event.
     */
    image?: CommentEventAttachmentsImage | null;
  }
  export interface CommentEvent {
    __typename: 'CommentEvent';
    /**
     * Whether the comment event has been edited. If true, then the comment event has been edited.
     */
    edited: boolean;
    /**
     * Whether the comment event can be edited. If true, then the comment event can be edited.
     */
    canEdit: boolean;
    /**
     * Whether the comment event can be deleted. If true, then the comment event can be deleted.
     */
    canDelete: boolean;
    /**
     * The attachments associated with the comment event.
     */
    attachments: CommentEventAttachments[];
  }

  export interface _BaseFields_ {

    /**
     * Globally unique identifier.
     */
    id: ID;

    /**
     * The date and time when the event was created.
     */
    createdAt: string;

    /**
     * Human readable text that describes the event.
     */
    message: string;

    /**
     * Whether the event was created by an app.
     */
    attributeToApp: boolean;

    /**
     * Whether the event was caused by an admin user.
     */
    attributeToUser: boolean;

    /**
     * Whether the event is critical.
     */
    criticalAlert: boolean;
  }
}

export type TimelineEventFragmentFragmentData = TimelineEventFragmentFragmentData.CommentEvent | TimelineEventFragmentFragmentData.Other

export const timelineEventFragmentSelections: GraphSelection[] = ([
  {
    name: "__typename",
    alias: null,
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "id",
    alias: null,
    type: { name: "ID", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "createdAt",
    alias: null,
    type: { name: "DateTime", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "message",
    alias: null,
    type: { name: "FormattedString", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "attributeToApp",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "attributeToUser",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "criticalAlert",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "Event", definedType: "Interface" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "__typename",
    alias: null,
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "CommentEvent", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "edited",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "CommentEvent", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "canEdit",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "CommentEvent", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "canDelete",
    alias: null,
    type: { name: "Boolean", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "CommentEvent", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "attachments",
    alias: null,
    type: { name: "CommentEventAttachment", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "CommentEvent", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "__typename",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "id",
        alias: null,
        type: { name: "ID", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "name",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "size",
        alias: null,
        type: { name: "Int", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "fileExtension",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "url",
        alias: null,
        type: { name: "URL", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "image",
        alias: null,
        type: { name: "Image", definedType: "Object" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
        directive: null,
        selections: ([
          {
            name: "__typename",
            alias: null,
            type: { name: "String", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Image", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "transformedSrc",
            alias: null,
            type: { name: "URL", definedType: "Scalar" },
            arguments: { maxWidth: { type: "OperationVariableKey", value: "maxImageWidth" }, maxHeight: { type: "OperationVariableKey", value: "maxImageHeight" } },
            passedGID: null,
            typeCondition: { name: "Image", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }
        ] as GraphSelection[])
      }
    ] as GraphSelection[])
  }
] as GraphSelection[])

