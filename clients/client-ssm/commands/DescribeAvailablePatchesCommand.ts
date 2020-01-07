import {
  SSMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SSMClient";
import {
  DescribeAvailablePatchesRequest,
  DescribeAvailablePatchesResult
} from "../models/index";
import {
  deserializeAws_json1_1DescribeAvailablePatchesCommand,
  serializeAws_json1_1DescribeAvailablePatchesCommand
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

export type DescribeAvailablePatchesCommandInput = DescribeAvailablePatchesRequest;
export type DescribeAvailablePatchesCommandOutput = DescribeAvailablePatchesResult;

export class DescribeAvailablePatchesCommand extends $Command<
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAvailablePatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAvailablePatchesCommandInput,
    DescribeAvailablePatchesCommandOutput
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
    input: DescribeAvailablePatchesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAvailablePatchesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeAvailablePatchesCommandOutput> {
    return deserializeAws_json1_1DescribeAvailablePatchesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}