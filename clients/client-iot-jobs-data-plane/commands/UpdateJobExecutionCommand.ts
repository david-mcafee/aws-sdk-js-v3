import {
  IoTJobsDataPlaneClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTJobsDataPlaneClient";
import {
  UpdateJobExecutionRequest,
  UpdateJobExecutionResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateJobExecutionCommand,
  serializeAws_restJson1_1UpdateJobExecutionCommand
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

export type UpdateJobExecutionCommandInput = UpdateJobExecutionRequest;
export type UpdateJobExecutionCommandOutput = UpdateJobExecutionResponse;

export class UpdateJobExecutionCommand extends $Command<
  UpdateJobExecutionCommandInput,
  UpdateJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput> {
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
    input: UpdateJobExecutionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateJobExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateJobExecutionCommandOutput> {
    return deserializeAws_restJson1_1UpdateJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}