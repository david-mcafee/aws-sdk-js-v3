import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailClientResolvedConfig
} from "../WorkMailClient";
import {
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceResponse
} from "../models/index";
import {
  deserializeAws_json1_1AssociateDelegateToResourceCommand,
  serializeAws_json1_1AssociateDelegateToResourceCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type AssociateDelegateToResourceCommandInput = AssociateDelegateToResourceRequest;
export type AssociateDelegateToResourceCommandOutput = AssociateDelegateToResourceResponse;

export class AssociateDelegateToResourceCommand extends $Command<
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDelegateToResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociateDelegateToResourceCommandInput,
    AssociateDelegateToResourceCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateDelegateToResourceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDelegateToResourceCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<AssociateDelegateToResourceCommandOutput> {
    return deserializeAws_json1_1AssociateDelegateToResourceCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}