import {
  RAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RAMClient";
import {
  GetResourceSharesRequest,
  GetResourceSharesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetResourceSharesCommand,
  serializeAws_restJson1_1GetResourceSharesCommand
} from "../protocols/Aws_restJson1_1";
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

export type GetResourceSharesCommandInput = GetResourceSharesRequest;
export type GetResourceSharesCommandOutput = GetResourceSharesResponse;

export class GetResourceSharesCommand extends $Command<
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceSharesCommandInput, GetResourceSharesCommandOutput> {
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
    input: GetResourceSharesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetResourceSharesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetResourceSharesCommandOutput> {
    return deserializeAws_restJson1_1GetResourceSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}